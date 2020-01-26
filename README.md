# WikiTrustDataProcessing

## Process of Converting Revisions to Text

 - **Search Engine**: Convert search term (string) into page ID
	 - Associated API Calls:
		 - Query
			 - List=search
				 - srwhat="nearmatch"
				 
 - **Revision Puller**: Get a list of the 500 most recent revisions from a Wikipedia page (by page ID)
	 - Associated API Calls:
		 - action=query
			 - prop=revisions
				 - rvlimit=500

 - **Text Extraction**: Get the HTML markup associated with a given revision (by revision ID)
	 - Associated API Calls:
		 - action=parse
			 -  prop=text

 - **HTML Parser**: Use an external HTML parsing library to grab text based on the div tags.