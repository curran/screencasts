var express = require("express"),
    gitteh = require("gitteh"),
    path = require("path");

var server = express();

server.get("/", function(request, response) {
  gitteh.openRepository(path.join(__dirname, "repository", ".git"), function(error, repository) {
    if (error) return response.end(error.toString());
    repository.getBlob("9b4b40c2bca67e781930105fa190b9b90235cfe5", function(error, blob) {
      if (error) return response.end(error.toString());
      response.end(blob.data.toString("UTF-8"));
    });
  });
});

server.listen(3000);
