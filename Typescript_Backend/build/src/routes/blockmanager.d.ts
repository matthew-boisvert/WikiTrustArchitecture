export declare function blockmanager(): Promise<void>;
export declare class Block {
    pageId: number;
    revisions: Revision[];
    size: number;
    constructor(pageId: number, revisions: Revision[], size: number);
}
export declare class Revision {
    text: string;
    revisionId: number;
    constructor(text: string, revid: number);
}
