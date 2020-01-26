import * as puller from 'superagent';

export async function pull_by_pageid(pageid: number) {
  puller
    .get('https://en.wikipedia.org/w/api.php')
    .query({
      action: 'query',
      format: 'json',
      list: 'allrevisions',
      pageids: pageid,
    })
    .query('arvprop=ids%7Ccomment%7Cuserid%7Cflags')
    .withCredentials()
    .buffer(true)
    .end((err, res) => {
      console.log(res.body);
      return res.body.query.allrevisions;
    });
}
