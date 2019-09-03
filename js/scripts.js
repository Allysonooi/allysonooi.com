$(document).ready(function() {
  var options = {
    strings: ["I am <b style='color: #66fcc1;'>Allyson Ooi</b>.", "I aspire to be a <b style='color: #9566fc;'>Developer</b>.", "You might ask <b style='color: #fcf366;'>why</b>..", "Well...", "I simply enjoy <b style='color: #66FCF1;'>programming</b>.", ":)"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  }

  var options_footer = {
    strings: ["<b style='color: #66fcc1;'>Tea</b>?", "<b style='color: #9566fc;'>Milo</b>?", "<b style='color: #fcf366;'>Ice Lemon Tea</b>?", "<b style='color: #66FCF1;'>Coffee</b>?"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
  }

  var typed = new Typed(".typed", options);
  var typed_footer = new Typed(".typed-footer", options_footer);
});
