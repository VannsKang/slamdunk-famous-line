var Q = require('q');
var fs = require('fs');
var path = require('path');

var commentFile = path.join(__dirname, '../database/comments.json');
var commentsPerPage = 5 + Math.round(Math.random() * 5);

var readData = function () {
  var defer = Q.defer();
  fs.readFile(commentFile, function (error, data) {
    if (error) {
      return defer.reject(error);
    }
    return defer.resolve(JSON.parse(data));
  });
  return defer.promise;
};

var writeData = function (data) {
  var defer = Q.defer();
  fs.writeFile(commentFile, JSON.stringify(data, null, 2), function (error) {
    if (error) {
      return defer.reject(error);
    }
    return defer.resolve();
  });
  return defer.promise;
};

var getCommentsPage = function (page) {
  page = page ? page - 1 : 0;
  return readData().then(function (data) {
    return extractDataByPage(data, page);
  });
};

var extractDataByPage = function (data, page) {
  var startIndex = page * commentsPerPage;
  return Q.resolve(data.slice(startIndex, startIndex + commentsPerPage));
};

module.exports = {
  readData,
  writeData,
  getCommentsPage,
  extractDataByPage,
};
