const request = require('request');

const url = 'https://github.com/dreimert/cours-javascript-td4/blob/data/data.json?raw=true';

const getUrlContentParseJson = function(url, callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(null, JSON.parse(body)); // Show the HTML for the Google homepage.
    } else {
      callback(error);
    }
  })
};

const extractInfos = function(content) {
  console.log(content.items.map(function(question) {
      return {
        title: question.title,
        tags: question.tags,
        owner: question.owner
      };
    }
  ));
};

getUrlContentParseJson(url, function(err, content){
  if(!err) {
    extractInfos(content);
    const answersUrl = `https://github.com/dreimert/cours-javascript-td4/blob/data/${content.items[0].question_id}.json?raw=true`
    getUrlContentParseJson(answersUrl, console.log);

  } else {
    console.error(err);
  }
});
