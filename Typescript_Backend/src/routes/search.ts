import * as revpuller from './revpull';
import * as puller from 'superagent';
//import * as blockmanager from './blockmanager';

export async function search_by_category(pagename: string) {
  puller
    .get('https://en.wikipedia.org/w/api.php')
    .query({
      action: 'query',
      format: 'json',
      list: 'categorymembers',
      cmtitle: 'Category:' + pagename,
      cmtype: 'page',
      cmprop: 'ids|title|type',
    })
    .withCredentials()
    .buffer(true)
    .then(async res => {
      const pages = res.body.query.categorymembers;
      for (let i = 0; i < pages.length; i++) {
        const revisions = await revpuller.pull_by_pageid(pages[i].pageid);
        //pages[i].push({ revision: revisions });
      }
      console.log(pages);
      /*console.log(pages[0]);
      console.log(pages[0].revisions);
      return pages;*/
    });
}

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
      console.log(res.body.query.search);
      const revisions = await revpuller.pull_by_pageid(
        res.body.query.search[0].pageid
      );
      //console.log(revisions);
    });
}
