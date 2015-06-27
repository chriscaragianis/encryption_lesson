describe("cipherButton", function() {
  beforeEach(function() {
    $('#pText').val('abc');
    $('#a').val('-7');
    $('#b').val('2');
    cipherButton();
  });

  it ("sets the value ef #cText to the proper ciphered text", function() {
    expect($('#cText').val()).toEqual('{tm');
  });
});
