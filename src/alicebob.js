var lines = [
  "Okay Alice,",
  "Enter the message you want to send to Bob.",
  "Choose your affine cipher parameters and hit SEND.",
  "Copy the cpihertext and send it to Bob.",
  "If he knows your parameters,",
  "He will be able to read your message.",
  "Good Luck!"
  ];


var typists = [];

for (var i = 0; i < 3; i += 1) {
  typists.push(new LetterTyper({
    text: lines[i],
    target: $($('.line').get(i)),
    speed: 50}));
}

typists[0].start();
var set1 = setTimeout(typists[1].start(), 1500);
