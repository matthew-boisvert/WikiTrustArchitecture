"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const revpuller = require("./revpull");
const puller = require("superagent");
//import * as blockmanager from './blockmanager';
async function search_by_page(pagename) {
    puller
        .get('https://en.wikipedia.org/w/api.php')
        .query({
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: pagename,
        srwhat: 'nearmatch',
    })
        .withCredentials()
        .buffer(true)
        .then(async (res) => {
        if (res.body.error) {
            console.log(res.body.error);
        }
        else {
            const revisions = await revpuller.pull_by_pageid(res.body.query.search[0].pageid);
        }
    });
}
exports.search_by_page = search_by_page;
//# sourceMappingURL=search.js.map