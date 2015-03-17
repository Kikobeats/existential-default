'use strict';

var exists = require('existential');

module.exports = function(value, defaultValue) {
  return exists(value) ? value : defaultValue;
};
