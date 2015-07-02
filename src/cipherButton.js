$('.clearable').val('');

function cipherButton() {
  $('#plaintext-div').scrollTop();
  var a = parseInt($('#a').val());
  var b = parseInt($('#b').val());
  if (a == 0 || !isInt(a) || euclideanGcd(a, 96) != 1) {
    $('#bad-a').show(200); 
    $('.clearable').val('');
    return;
  }
  if (!isInt(b)) {
    $('#bad-b').show(200);
    $('.clearable').val('');
    return;
    }
  var affine = new Affine(a,b);
  $('#cText').val( affine.cipher($('#pText').val()));
}

$('#cipherbutton').on("click", cipherButton);

$('.dismiss-overlay').on('click', function() {$('.overlay').hide(200);});
