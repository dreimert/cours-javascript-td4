const rp = require('request-promise');

const url = 'https://github.com/dreimert/cours-javascript-td4/blob/data/data.json?raw=true';

const getUrlContentParseJson = function(url, callback) {
  return rp(url)
    .then(JSON.parse);
};

const extractInfos = function(content) {
  return content.items.map(function(question) {
      return {
        title: question.title,
        tags: question.tags,
        owner: question.owner
      };
    }
  );
};

getUrlContentParseJson(url)
.then(extractInfos)
.then(console.log)
