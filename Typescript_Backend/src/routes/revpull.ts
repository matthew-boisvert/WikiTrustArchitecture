import * as puller from 'superagent';
import * as block from './blockmanager';
import * as parse from './htmlparser';

//pulls 500 revisions from the page
export async function pull_by_pageid(pageid: number) {
  return new Promise((resolve, reject) => {
    puller
      .get('https://en.wikipedia.org/w/api.php')
      .query({
        action: 'query',
        format: 'json',
        prop: 'revisions',
        pageids: pageid,
        rvprop: 'ids|timestamp|flags|comment|user|userid',
        rvlimit: 5,
      })
      .withCredentials()
      .buffer(true)
      .end(async (err, res) => {
        let revs: block.Revision[];
        revs = [];
        for (const rev of res.body.query.pages[pageid].revisions) {
          const temp = await pull_by_revisionid(rev.revid);
          if (temp !== '') {
            revs.push(new block.Revision(temp, rev.revid, rev.userid));
          }
          console.log('completed rev: ' + rev.revid);
        }
        block.blockmanager(revs, pageid);
        resolve(revs);
      });
  });
}

export async function pull_by_revisionid(revid: number) {
  return new Promise<string>((resolve, reject) => {
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
        if (res.body.error) {
          resolve('');
        } else {
          //console.log(res.body);
          const txt = parse.parseText(res.body.parse.text['*']);
          resolve(txt);
          //return res.body.parse;
        }
      })
      .catch(err => {
        console.log('It no work: ' + revid);
        console.log(err);
      });
  });
}
