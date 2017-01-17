const request = require('request');

const url = 'https://github.com/dreimert/cours-javascript-td4/blob/data/data.json?raw=true';

const getUrlContent = function(url, callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body).items) // Show the HTML for the Google homepage.
    }
  })
};

getUrlContent(url, function(data) {
  console.log(data.map(function(question) {
      return {
        title: question.title,
        tags: question.tags,
        owner: question.owner
      }
    }
  ));
});
