"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
async function blockmanager(revs, pageId) {
    const bl = new Block(pageId, revs, revs.length);
    JSON.stringify(bl);
    fs.writeFile('output.json', JSON.stringify(bl), 'utf8', err => {
        if (err) {
            console.log('An error occured while writing JSON Object to File.');
            return console.log(err);
        }
        console.log('JSON file has been saved.');
    });
}
exports.blockmanager = blockmanager;
class Block {
    constructor(pageId, revisions, size) {
        this.pageId = pageId;
        this.revisions = revisions;
        this.size = size;
    }
}
exports.Block = Block;
class Revision {
    constructor(text, revid, userid) {
        this.text = text;
        this.revisionId = revid;
        this.userId = userid;
    }
}
exports.Revision = Revision;
//# sourceMappingURL=blockmanager.js.map