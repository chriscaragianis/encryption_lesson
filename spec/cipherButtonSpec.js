describe("cipher_button", function() {
  
  it ("sets the value of #cText to the proper ciphered text", function() {
    var cipherText = $('#cText');
    $('#pText').val('abc'); 
    cipherButton();
    expect(cipherText.val()).toEqual('{tm');
  });
});
