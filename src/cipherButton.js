
function cipherButton() {
  var affine = new Affine( parseInt($('#a').val()), parseInt($('#b').val()) );
  $('#cText').val( affine.cipher( $('#pText').val() ) );
}


$('#cipherbutton').on("click", cipherButton);



