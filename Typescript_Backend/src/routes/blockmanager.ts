import * as fs from 'fs';

export async function blockmanager(revs: Revision[], pageId: number) {
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
