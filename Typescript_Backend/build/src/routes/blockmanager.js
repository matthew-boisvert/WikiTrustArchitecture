"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function blockmanager() { }
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
    constructor(text, revid) {
        this.text = text;
        this.revisionId = revid;
    }
}
exports.Revision = Revision;
//# sourceMappingURL=blockmanager.js.map