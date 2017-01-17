const rp = require('request-promise');

const url = 'https://github.com/dreimert/cours-javascript-td4/blob/data/data.json?raw=true';

const getUrlContentParseJson = function(url) {
  return rp(url)
    .then(JSON.parse);
};

const extractInfos = function(content) {
  return content.items.map(function(question) {
      return {
        id: question.question_id,
        title: question.title,
        tags: question.tags,
        owner: question.owner
      };
    }
  );
};

const extractAnswers = function(content) {
  return Promise.all(content.map(function(question) {
      const urlAnswers = `https://github.com/dreimert/cours-javascript-td4/blob/data/${question.id}.json?raw=true`;
      return getUrlContentParseJson(urlAnswers);
    }
  ));
};

getUrlContentParseJson(url)
.then(extractInfos)
.then(extractAnswers)
.then(JSON.stringify)
.then(console.log)
