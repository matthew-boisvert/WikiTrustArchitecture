"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function blockmanager(revs, pageId) {
    const bl = new Block(pageId, revs, revs.length);
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