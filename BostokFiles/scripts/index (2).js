function key(type, code) {
  var e = document.createEvent("Event");
  e.initEvent(type, true, true);
  e.keyCode = code;
  document.getElementById("hplogo").dispatchEvent(e);
}

setInterval(function() {
  key("keydown", 37);
  key("keypress", 37);
  key("keyup", 37);
  key("keydown", 39);
  key("keypress", 39);
  key("keyup", 39);
}, 10);
