export async function blockmanager() {}

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

  constructor(text: string, revid: number) {
    this.text = text;
    this.revisionId = revid;
  }
}
