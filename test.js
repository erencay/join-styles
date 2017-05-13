var assert = require('assert');
var joinStyles = require('./index.js');

(function () {
  var styles = {
    class1: 'abc',
    class2: 'def',
  };

  var actual = joinStyles(styles, 'class1', 'class1', 'class2', 'global', null, undefined);
  var expected = 'abc class1 def global';

  assert.equal(actual, expected);
})();

(function () {
  var actual = joinStyles('.global1', '.global2');
  var expected = '.global1 .global2';

  assert.equal(actual, expected);
})();
