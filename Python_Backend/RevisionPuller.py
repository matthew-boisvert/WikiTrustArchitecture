import pywikibot
import wikiCrawler.library.SearchEngine as SE

def get_latest_revisions(page:pywikibot.page.Page, recent_to_oldest=True, num_revisions=None, start_time=None, end_time=None):
    """
    Returns the last (num_revisions) revisions from a given Wikipedia page
    :param page: A pywikibot.Page object that we want to grab the the revisions for
    :param recent_to_oldest: Set to false if we want the revisions in order of oldest to most recent
    :param num_revisions: The number of revisions to be grabbed (set to an integer to set limit to number of revisions grabbed)
    :param start_time: A timestamp corresponding to the oldest revision we want to grab
    :param end_time: A timestamp corresponding to the most recent revision we want to grab
    :return: A list of pywikibot.page.Revision objects (dictionaries that store revisions by revid, text changed, timestamp, user, and comment)
    """
    return list(page.revisions(reverse=not recent_to_oldest, total=num_revisions, starttime=start_time, endtime=end_time))

def get_text_of_old_revision(page:pywikibot.page.Page, rev_id:int):
    """
    Returns the WikiText of a page from a specific revision
    :param page: A pywikibot.Page object that we want to return the text for
    :param rev_id: The revision id corresponding to the revision of the page that we want to extract the text based on
    :return: A string of WikiText containing the text of a page after the revision
    """
    return page.getOldVersion(rev_id)

def getRevisionMetadata(revision:pywikibot.page.Revision, key:str):
    """
    Returns a piece of metadata associated with a revision
    :param key: A string that corresponds to a valid piece of metadata associated with a revision
                Valid inputs: comment, revid, timestamp, user, rollbacktoken
    :return: The desired metadata as a string
    """
    return revision[key]


"""
Test Code:
engine = SE.SearchEngine();
dogPage = engine.search("Dog", max_pages_grabbed=1, search_by="nearmatch")[0]
lastRev = get_latest_revisions(page=dogPage, recent_to_oldest=True, num_revisions=1)[0]
print(getRevisionMetadata(lastRev, "revid"))
"""
