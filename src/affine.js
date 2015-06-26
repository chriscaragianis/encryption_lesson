function Affine(a, b) {
  if (euclidean_gcd(a, 96) != 1)
    throw "Bad Argument"
  this.a = a;
  this.b = b;
 
  this.transform = function(input) {
    return mod((a*input + b), 96);
  };
  
  this.invert = function(input) {
  };

  this.cipher = function(word) {
    var result = '';
    for (var v of word) {
      result += String.fromCharCode(this.transform(v.charCodeAt(0)) + 32);
    }
    return result;
  };
   
  this.decipher = function(word) {
  };
}
