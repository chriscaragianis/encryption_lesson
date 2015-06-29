describe("Affine", function() {
  it("displays overlay on bad a", function() {
    var aff1 = new Affine(0,3);
    expect($('.overlay').css("display")).toEqual("block");
  });
  it("displays overlay on bad a", function() {
    $('.overlay').hide();
    var aff2 = new Affine(-3,3);
    expect($('.overlay').css("display")).toEqual("block");
  });
  it("does not display overlay on good a", function() {
    $('.overlay').hide();
    var aff2 = new Affine(-7,3);
    expect($('.overlay').css("display")).toEqual("none");
  });
  
});

describe("cipher", function() {
  it("takes string to string", function() {
    var affine_1 = new Affine(5, -2);
    var affine_2 = new Affine(-7, 2);
    var affine_3 = new Affine(7, 1);
    expect(affine_1.cipher('a')).toEqual('#');
    expect(affine_2.cipher('abc')).toEqual('{tm');
    expect(affine_3.cipher('')).toEqual('');
  });
});

describe("decipher", function() {
  it("takes string to string", function() {
    var affine_1 = new Affine(5, -2);
    var affine_2 = new Affine(-7, 2);
    var affine_3 = new Affine(7, 1);
    expect(affine_1.decipher('#')).toEqual('a');
    expect(affine_2.decipher('{tm')).toEqual('abc');
    expect(affine_3.decipher('')).toEqual('');
  });
});
