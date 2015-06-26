describe("euclidean_gcd", function() {
  it("finds the GCD", function() {
    expect(euclidean_gcd(48,18)).toEqual(6);
    expect(euclidean_gcd(49,18)).toEqual(1);
    expect(euclidean_gcd(-8,4)).toEqual(4);
  });
});

describe("transform", function() {
  it("sends integer to integer", function() {
    expect(transform(2, 3, 5, 1)).toEqual(0);
    expect(transform(4, 1, 11, -1)).toEqual(8);
  });
});

describe("transform", function() {
  it("throws exception on bad value of 'a'", function() {
    expect(transform.bind(null, 0, 3, 4, 1)).toThrow();
    expect(transform.bind(null, 2, 3, 4, 1)).toThrow();
  });
});

describe("cipher", function() {
  it("takes string to string", function() {
    expect(cipher(5, -2, 'a')).toEqual('#');
    expect(cipher(-7, 2, 'abc')).toEqual('{tm');
    expect(cipher(7, 1, '')).toEqual('');
  });
});
