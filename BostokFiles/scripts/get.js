var fs = require("fs"),
    http = require("http");

function get(url, callback) {
  if (/^http:/.test(url)) {
    http.get(url, function(response) {
      var body = [];
      response
          .on("data", function(data) { body.push(data); })
          .on("end", function() { callback(null, body.join("")); })
          .setEncoding("utf8");
    }).on("error", function(error) {
      callback(error, null);
    });
  } else {
    fs.readFile(url, "utf8", callback);
  }
}
