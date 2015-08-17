var highlighterSelected = false;
var highlighterCursorUrl = chrome.extension.getURL('images/highlighter_cursor.png');

function toggleHighlighter() {
	if(!highlighterSelected) {
  		chrome.tabs.executeScript({
  			code: 'document.body.style.cursor="url(' + highlighterCursorUrl + ') 0 32, auto";'
  		});
  	
  		highlighterSelected = true;
  	}
  	else {
  		chrome.tabs.executeScript({
  			code: 'document.body.style.cursor="auto";'
  		});
  	
  		highlighterSelected = false;
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.message == "isHighlighterSelected") {
		sendResponse({highlighterSelected: highlighterSelected});
	}
});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
  	code: toggleHighlighter()
  });
});