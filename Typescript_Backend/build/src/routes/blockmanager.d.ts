export declare function blockmanager(revs: Revision[], pageId: number): Promise<void>;
export declare class Block {
    pageId: number;
    revisions: Revision[];
    size: number;
    constructor(pageId: number, revisions: Revision[], size: number);
}
export declare class Revision {
    text: string;
    revisionId: number;
    userId: string;
    constructor(text: string, revid: number, userid: string);
}
