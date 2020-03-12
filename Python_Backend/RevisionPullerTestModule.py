from pywikibot import Timestamp
import datetime
import RevisionPuller as RP
import SearchEngine as SE
import PageProcessor as PP

engine = SE.SearchEngine()
processor = PP.PageProcessor()
dogPage = engine.search("dog", 1, "nearmatch")[0]
num_rev = 2


revs = RP.get_latest_revisions(dogPage, recent_to_oldest=False, num_revisions=num_rev, end_time=Timestamp.utcnow())
test_revs = RP.get_revisions_between(dogPage, revs[1], revs[0])
time1 = Timestamp.utcnow()

print(len(RP.get_latest_revisions(dogPage)))
time_elapsed = Timestamp.utcnow()-time1
print("Time elapsed: " +  str(time_elapsed))

# for i in range(1, len(revs)):
#     print(processor.getReadableText(RP.get_text_of_old_revision(dogPage, RP.getRevisionMetadata(revs[i], "revid"))))