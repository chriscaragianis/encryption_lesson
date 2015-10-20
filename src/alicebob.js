var lines = [
  "Okay Alice...",
  "Enter the message you want to send to Bob.",
  "Choose your affine cipher parameters and hit OK.",
  "Copy the ciphertext and send it to Bob.",
  "If he knows your parameters,",
  "He will be able to read your message.",
  "Good Luck!"
  ];

var targets = [];

for (var i = 0; i < 7; i += 1) {
  targets.push($($('.line').get(i)));
}

var typist = new LetterTyper({
  text: lines,
  targets: targets,
  speed: 50,
});

$(window).scroll(function() {
  if ($(window).scrollTop() > $('#plaintext-div').offset().top - $(window).height()) {
    typist.start();
    $(window).off();
  }
});
