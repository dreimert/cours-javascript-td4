const tap = require('tap')
const exo2 = require('../exercices/exo2-b');

tap.test('callback', function (childTest) {
  exo2(function(val) {
    childTest.equal(val, "html", "Le paramètre du callback est diffèrent de \"html\"");
    childTest.end();
  })
})
