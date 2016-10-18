var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
const path = require('path');

var getData = function (url, callback) {
  request(url, function (err, res, body) {
    var $ = cheerio.load(body);
    var resultsObject = {};
    var resultsArray = [];
    var text;
    var href;

    var links = $('a');

    for (var key in links) {
      if (links[key].children) {
        
        if (links[key].children.length) {
          if (links[key].children.forEach) {
            links[key].children.forEach(function (tag) {
              if (tag.type = 'text' && tag.data !== ' ' && tag.data && tag.data !== ' ' && tag.data.indexOf('\n') === -1 && tag.data !== '  ') {
                text = tag.data;
              }
            });
          }
        }
      }

      if (links[key].attribs) {
        href = links[key].attribs.href;
      }

      if (text && href) { 
        if (text === ' ') {
          console.log('BUG!');
        }
        resultsObject[href] = text;
      }
    }

    for (var key in resultsObject) {
      if (key[0] === '/') {
        fullPath = path.join(url, key);
      } else {
        fullPath = key;
      }

      resultsArray.push({
        text: resultsObject[key],
        link: fullPath,
      });
    }

    callback(resultsArray);
  });
};

getData('https://www.youtube.com/', function (results) {
  console.log(results);
});


















