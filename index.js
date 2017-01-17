const request = require('request');

const url = 'https://github.com/dreimert/cours-javascript-td4/blob/data/data.json?raw=true';

const getUrlContentAndShow = function(url) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body).items) // Show the HTML for the Google homepage.
    }
  })
};

getUrlContentAndShow(url);
