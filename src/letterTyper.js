function LetterTyper(options) {

  //options {
  //
  //  text: array of strings to be typed
  //  speed: ms per letter
  //  blink: (boolean) include a blinking cursor
  //  blinkColor: (string) color of cursor
  //  targets array of DOM nodes to fill with text
  //  next: function to call on completion
  //  i: array index
  //
  //}
  this.options = options;
  this.place = 0;
  this.i = 0;
  this.intervalID = null;
}


LetterTyper.prototype = {
  printNext: function() {
    if (this.place >= this.options.text[this.i].length) {
      this.i += 1; 
      this.place = 0;
    }
    if (this.i >= this.options.text.length) {
      this.stop();
      return;
    }

    this.options.targets[this.i].text(this.options.targets[this.i].text() + this.options.text[this.i][this.place]);

    this.place += 1;
  },

  start: function() {
    var that = this;
    this.intervalID = setInterval(function(){that.printNext();}, that.options.speed);
  },

  stop: function() {
    clearInterval(this.intervalID);
  }
 
};

