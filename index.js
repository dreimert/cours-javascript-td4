const request = require('request');

request('https://github.com/dreimert/cours-javascript-td4/blob/data/data.json?raw=true', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
