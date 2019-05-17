var express = require('express');
var app = express();

var logger = require('./logger');

app.use(logger);

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/index.html');
});

app.get('/people', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/people.html');
});

app.get('/cats', function (req, res, next) {
  var content = "<html>";
  content += "<body>";
  content += "<h1>Welcome to our cats page</h1>";
  content += "</body>";
  content += "</html>";
  res.status(200).send(content);
});

var availableNames = [
  'luke',
  'leia',
  'rey',
  'finn',
  'r2d2'
];
app.get('/people/:name', function (req, res, next) {
  console.log("== req.params:", req.params);
  var name = req.params.name;
  if (availableNames.indexOf(name) !== -1) {
    var htmlFile = __dirname + '/public/people/' + name + '.html';
    console.log("== sending file:", htmlFile);
    res.status(200).sendFile(htmlFile);
  } else {
    next();
  }
});

app.get('*', function (req, res, next) {
  res.status(404).send("The page you requested doesn't exist");
});

app.listen(3001, function () {
  console.log("== Server listening on port 3001");
});
