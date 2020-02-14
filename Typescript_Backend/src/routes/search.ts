import * as revpuller from './revpull';
import * as puller from 'superagent';
import * as block from './blockmanager';
//import * as blockmanager from './blockmanager';
export async function search_by_page(pagename: string) {
  puller
    .get('https://en.wikipedia.org/w/api.php')
    .query({
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: pagename,
      srwhat: 'nearmatch',
    })
    .withCredentials()
    .buffer(true)
    .then(async res => {
      const revisions = await revpuller.pull_by_pageid(
        res.body.query.search[0].pageid
      );
    });
}
