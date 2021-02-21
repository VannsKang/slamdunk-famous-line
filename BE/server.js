var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var port = 9999;
var app = express();

// other setting
app.use('/', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// API view
app.use('/api/comments/', require('./view'));

app.listen(port, function () {
  console.log('Server started: http://localhost:' + port + '/');
});
