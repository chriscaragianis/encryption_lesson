function affine_string(a, b, pText)
{
    var cText = "";
    for (int i = pText.length - 1; i >= 0; i--)
    	cText = cText + "a";//affine_char(a,b,pText.charAt(i)); 
    return cText;
}
