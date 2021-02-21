var express = require('express');
var router = express.Router();

var service = require('../service');

// list
router.get('/', function (req, res) {
  service
    .getCommentsPage()
    .then(function (data) {
      res.json(data);
    })
    .fail(function (error) {
      console.error(error);
      res.sendStatus(500);
    });
});

// write
router.post('/', function (req, res) {
  service.readData().then(function (data) {
    var newComment = {
      id: Date.now(),
      author: req.body.author,
      comment: req.body.comment,
    };
    data.unshift(newComment);
    return service
      .writeData(data)
      .then(function () {
        res.json(data);
      })
      .fail(function (error) {
        console.error(error);
        res.sendStatus(500);
      });
  });
});

// paging
router.get('/page/:page', function (req, res) {
  var page = req.params.page;
  service
    .getCommentsPage(page)
    .then(function (data) {
      res.json(data);
    })
    .fail(function (error) {
      console.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
