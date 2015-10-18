function LetterTyper(options) {

  //options {
  //
  //  text: the text to be typed
  //  speed: ms per letter
  //  blink: (boolean) include a blinking cursor
  //  blinkColor: (string) color of cursor
  //  target: JQuery object to fill with text
  //
  //}
  this.options = options;
  this.place = 0;
  this.intervalID = null;
}


LetterTyper.prototype = {
  printNext: function() {
    if (this.place >= this.options.text.length - 1) {
      this.stop();
    }

    this.options.target.text(this.options.target.text() +
      this.options.text[this.place]);

    this.place += 1;
  },

  start: function() {
    var that = this;
    this.intervalID = setInterval(function(){that.printNext()}, that.options.speed);
  },

  stop: function() {
    var that = this;
    clearInterval(this.intervalID);
  }
};

