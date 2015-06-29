function Affine(a, b) {
  if (a == 0 || euclideanGcd(a, 96) != 1)
    $('.overlay').show();
  this.a = a;
  this.b = b;
  var a_1 = inverses[mod(a, 96)];

  this.transform = function(input) {
    return mod((a*input + b), 96) + 32;
  };

  this.invert = function(input) {
    return mod(a_1*(input - b), 96) + 32;
  };

  this.cipher = function(word) {
    var result = '';
    for (var i = 0; i < word.length; i++) {
      result += String.fromCharCode(this.transform(word[i].charCodeAt(0)));
    }
    return result;
  };

  this.decipher = function(word) {
    var result = '';
    for (var i = 0; i < word.length; i++) {
      result += String.fromCharCode(this.invert(word[i].charCodeAt(0)));
    }
    return result;
  };
}


$('.dismiss-overlay').on('click', function() {$('.overlay').hide();});
