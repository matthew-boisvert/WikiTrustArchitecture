"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const revpuller = require("./revpull");
const puller = require("superagent");
//import * as blockmanager from './blockmanager';
async function search_by_category(pagename) {
    puller
        .get('https://en.wikipedia.org/w/api.php')
        .query({
        action: 'query',
        format: 'json',
        list: 'categorymembers',
        cmtitle: 'Category:' + pagename,
        cmtype: 'page',
        cmprop: 'ids|title|type',
    })
        .withCredentials()
        .buffer(true)
        .then(async (res) => {
        const pages = res.body.query.categorymembers;
        for (let i = 0; i < pages.length; i++) {
            const revisions = await revpuller.pull_by_pageid(pages[i].pageid);
            //pages[i].push({ revision: revisions });
        }
        console.log(pages);
        /*console.log(pages[0]);
        console.log(pages[0].revisions);
        return pages;*/
    });
}
exports.search_by_category = search_by_category;
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
        console.log(res.body.query.search);
        const revisions = await revpuller.pull_by_pageid(res.body.query.search[0].pageid);
        //console.log(revisions);
    });
}
exports.search_by_page = search_by_page;
//# sourceMappingURL=search.js.map