var assert = require('assert');
var joinStyles = require('./index.js');

var styles = {
  class1: '.abc',
  class2: '.def',
};

var actual = joinStyles(styles, 'class1', 'class2', '.global');
var expected = '.abc .def .global';

assert.equal(actual, expected);
