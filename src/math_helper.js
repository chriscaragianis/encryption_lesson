var inverses = [-1, 1, -1, -1, -1, 77, -1, 55, -1, -1, -1, 35, -1, 37, -1, -1,    
//               0  1   2   3       5                  10                  15
                -1, 17, -18, 91, -1, -1, -1, 71, -1, 73, -1, -1, -1, 53, -1,  
//                               20                  25                  30
                31, -1, -1, -1, 11, -1, 13, -1, -1, -1, 89, -1, 67, -1, -1,
//                              35                  40                   45
                
function mod(a,n) {
  result = a % n;
  if (result >= 0)
    return result;
  else 
    return result + n;
}
function euclidean_gcd(a, b) {
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
