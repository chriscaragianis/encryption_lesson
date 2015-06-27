var inverses = [-1, 1, -1, -1, -1, 77, -1, 55, -1, -1, -1, 35, -1, 37, -1, -1,
                -1, 17, -18, 91, -1, -1, -1, 71, -1, 73, -1, -1, -1, 53, -1,
                31, -1, -1, -1, 11, -1, 13, -1, -1, -1, 89, -1, 67, -1, -1,
                -1, 47, -1, 49, -1, -1, -1, 29, -1, 7, -1, -1, -1, 83, -1,
                85, -1, -1, -1, 65, -1, -1, 43, -1, -1, 23, -1, 25, -1, -1,
                -1, 5, -1, 79, -1, -1, -1, 59, -1, 61, -1, -1, -1, 41, -1,
                19, -1, -1, -1, 95];

function mod(a,n) {
  result = a % n;
  if (result >= 0)
    return result;
  else
    return result + n;
}

function euclideanGcd(a, b) {
  if (Math.abs(a) > Math.abs(b)) {
    var c = b;
    b = a;
    a = c;
  }
  if (b % a == 0)
    return a;
  else
    return euclideanGcd(mod(b,a) , a);
}
