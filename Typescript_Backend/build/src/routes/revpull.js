"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puller = require("superagent");
const block = require("./blockmanager");
const parse = require("./htmlparser");
async function pull_by_pageid(pageid) {
    return new Promise((resolve, reject) => {
        puller
            .get('https://en.wikipedia.org/w/api.php')
            .query({
            action: 'query',
            format: 'json',
            prop: 'revisions',
            pageids: pageid,
            rvprop: 'ids|timestamp|flags|comment|user|userid',
            rvlimit: 500,
        })
            .withCredentials()
            .buffer(true)
            .end(async (err, res) => {
            //console.log(res.body.query.pages[pageid]);
            let revs;
            revs = [];
            for (const rev of res.body.query.pages[pageid].revisions) {
                const temp = await pull_by_revisionid(rev.revid);
                revs.push(new block.Revision(temp, rev.revid));
                //console.log(rev);
                console.log('completed rev: ' + rev.revid);
            }
            //pull_by_revisionid(res.body.query.pages[pageid].revisions[0].revid);
            resolve(revs);
        });
    });
}
exports.pull_by_pageid = pull_by_pageid;
async function pull_by_revisionid(revid) {
    return new Promise((resolve, reject) => {
        puller
            .get('https://en.wikipedia.org/w/api.php')
            .query({
            action: 'parse',
            format: 'json',
            oldid: revid,
            prop: 'text|revid|properties|parsewarnings',
            wrapoutputclass: '',
            contentformat: 'text/plain',
        })
            .withCredentials()
            .buffer(true)
            .then(res => {
            console.log('It work: ' + revid);
            //console.log(res.body.parse.text['*']);
            const txt = parse.parseText(res.body.parse.text['*']);
            resolve(txt);
            //return res.body.parse;
        })
            .catch(err => {
            console.log('It no work: ' + revid);
            console.log(err);
        });
    });
}
exports.pull_by_revisionid = pull_by_revisionid;
//# sourceMappingURL=revpull.js.map