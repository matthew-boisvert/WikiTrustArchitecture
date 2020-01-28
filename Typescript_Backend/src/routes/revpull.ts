import * as puller from 'superagent';

export async function pull_by_pageid(pageid: number) {
  puller
    .get('https://en.wikipedia.org/w/api.php')
    .query({
      action: 'query',
      format: 'json',
      prop: 'revisions',
      pageids: pageid,
      rvprop: 'ids|timestamp|flags|comment|user|userid',
      rvlimit: 10,
    })
    .withCredentials()
    .buffer(true)
    .end((err, res) => {
      console.log(res.body.query.pages[pageid]);
      pull_by_revisionid(res.body.query.pages[pageid].revisions[0].revid);
      return res.body.query;
    });
}

export async function pull_by_revisionid(revid: number) {
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
    .end((err, res) => {
      console.log(res.body.parse);
      return res.body.parse;
    });
}
