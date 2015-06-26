//	charCount returns a 96 element array
//	counting the occurrences of the character
//	with code matching the index

function charCount(cText)
{
	var results = [];
	for (var i = 0; i < 96; i++)
		results[i] = 0;
	for (var i = 0; i < cText.length; i++)
		results[cText.charCodeAt(i) - 31]++;
	return results;
}

function makeChart(cText)
{
	var results = charCount(cText);
	tableHTML = "<table id = 'freqtable'><tr id = 'chars'>";
	for (var i = 0; i < 96; i++)
	{
		if (results[i] != 0)
			tableHTML  = tableHTML + "<td>" + String.fromCharCode(i + 31) + "</td>"; 
	}
	tableHTML += "</tr><tr id = 'values'>";
	for (var j = 0; j < 96; j++)
	{
		if (results[j] != 0)
			tableHTML += "<td>" + results[j] + "</td>"; 
	}
	tableHTML = tableHTML + "</tr>" + "</td>"
	return tableHTML;	
}
