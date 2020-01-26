"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puller = require("superagent");
async function pull_by_pageid(pageid) {
    puller
        .get('https://en.wikipedia.org/w/api.php')
        .query({
        action: 'query',
        format: 'json',
        list: 'allrevisions',
        pageids: pageid,
    })
        .query('arvprop=ids%7Ccomment%7Cuserid%7Cflags')
        .withCredentials()
        .buffer(true)
        .end((err, res) => {
        console.log(res.body);
        return res.body.query.allrevisions;
    });
}
exports.pull_by_pageid = pull_by_pageid;
//# sourceMappingURL=revpull.js.map