function mult_inv_mod_n(a, n) {
  
function mod(a,n) {
  result = a % n;
  if (result >= 0)
    return result;
  else 
    return result + n;
}

function euclidean_gcd(a, b) {
  if (a == 0 || b == 0)
    throw "Bad Argument"
  if (Math.abs(a) > Math.abs(b)) {
    var c = b;
    b = a;
    a = c;
  }
  if (b % a == 0)
    return a;
  else 
    return euclidean_gcd(mod(b,a) , a); 
}

function Affine(a, b, n) {
  if (euclidean_gcd(a,n) > 1)
    throw "Bad Argument";
  this.a = a;
  this.b = b;
  this.n = n;
 
  this.transform = function(input {
    return mod((a*input + b), n);
  }
  this.invert = function(input) {
    return (input-32)
}

function invert(a, b, n, input) {
}

function cipher(a, b, word) {
  result = '';
  for (var v of word) {
    result += String.fromCharCode(transform(a, b, 96, v.charCodeAt(0)) + 32);
  }
  return result;
}
