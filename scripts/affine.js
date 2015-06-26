//	affine performs the given affine transformation on a char
//	
//	returns ascii-reduced result
 
function affine_char(a, b, pChar)
	{
		if (pChar.length != 1)
		{	
			alert("affine_char attempted to chew other than one char!)");
			return NaN;
		}
    		return ((a*pChar.charCodeAt(0) +b) % 95 + 32);
	}

function affine_string(a, b, pText)
	{
		var cText = "";
		for (var i = 0; i < pText.length; i++)
			cText = cText + String.fromCharCode(affine_char(a,b,pText.charAt(i))); 
		return cText;
	}

	
