export async function blockmanager(revs: Revision[], pageId: number) {
  const bl = new Block(pageId, revs, revs.length);
}

export class Block {
  pageId: number;
  revisions: Revision[];
  size: number;

  constructor(pageId: number, revisions: Revision[], size: number) {
    this.pageId = pageId;
    this.revisions = revisions;
    this.size = size;
  }
}

export class Revision {
  text: string;
  revisionId: number;
  userId: string;

  constructor(text: string, revid: number, userid: string) {
    this.text = text;
    this.revisionId = revid;
    this.userId = userid;
  }
}
