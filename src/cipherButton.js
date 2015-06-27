$(function() {
  $('#cipher-button').on('click', cipherButton());
});

function cipherButton() {
  var plainText = $('#pText');
  var cipherText = $('#cText');
  var affine = new Affine(-7,2);
  cipherText.val(affine.cipher(plainText.val()));
}




