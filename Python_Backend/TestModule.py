import SearchEngine as SE
import RevisionPuller as RP
import PageProcessor as PP

# Initialization of search engine and revision puller
engine = SE.SearchEngine()
processor = PP.PageProcessor()


# To get a page with a closest matching title, do "search(search term, max_pages_grabbed=1, search_by="nearmatch")[0]"
dogPage = engine.search("Dog", max_pages_grabbed=1, search_by="nearmatch")[0]

# To get an array of revisions do "get_latest_revisions(page, recent_to_oldest=True, num_revisions)"

lastRev = RP.get_latest_revisions(page=dogPage, recent_to_oldest=True, num_revisions=1)[0]

# To get the revision id of a previous revision do "getRevisionMetadata(revision, revid)"
lastRevId = RP.getRevisionMetadata(lastRev, "revid")

# To get the wikiText of an older revision, do "get_text_of_old_revision(page, revid)"
lastRevisionWikiText = RP.get_text_of_old_revision(dogPage, lastRevId)

# To parse the WikiText in a simple way use "naiveStrip(WikiText)"
lastRevisionReadable = processor.getReadableText(lastRevisionWikiText)


# To get the WikiText of the most recent revision do "[page object].text"
currentRevisionWikiText = dogPage.text
currentRevisionReadable = processor.getReadableText(currentRevisionWikiText)