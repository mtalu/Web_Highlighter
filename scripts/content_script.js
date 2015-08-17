function highlightSelectedText() 
{
  var text = window.getSelection();
  var start = text.anchorOffset;
  var end = text.focusOffset - text.anchorOffset;

  range = window.getSelection().getRangeAt(0);
  range1 = window.getSelection().toString();
  var selectionContents = range.extractContents();
  var span = document.createElement("span");

  span.appendChild(selectionContents);

  span.setAttribute("class", "highlighted");
  span.style.backgroundColor = "yellow";

  range.insertNode(span);
}


document.addEventListener("mouseup", function() {
	chrome.runtime.sendMessage({message: "isHighlighterSelected"}, function(response) {
		if(response.highlighterSelected) {
			var text = window.getSelection().toString();
			if(text.length > 0) {
				highlightSelectedText();
			}
		}
	});
});

