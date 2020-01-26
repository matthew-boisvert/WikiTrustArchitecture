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
      return res.body.query;
    });
}
