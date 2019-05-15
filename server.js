var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
  var content = "<html>";
  content += "<body>";
  content += "<h1>Hello world!</h1>";
  content += "</body>";
  content += "</html>";
  res.status(200).send(content);
});

app.get('/cats', function (req, res, next) {
  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our cats page</h1>";
  content += "</body>";
  content += "</html>";
  res.status(200).send(content);
});

app.get('*', function (req, res, next) {
  res.status(404).send("The page you requested doesn't exist");
});

app.listen(3001, function () {
  console.log("== Server listening on port 3001");
});
