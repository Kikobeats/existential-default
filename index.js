'use strict'

var exists = require('existential')
var _merge = require('lodash.merge')
var _clone = require('lodash.clonedeep')

function merge (x, y) {
  return _merge(_clone(x), y)
}

function isObject (arg) {
  return typeof arg === 'object' && arg !== null
}

function resolveMerge (target, source) {
  if (!isObject(source)) return exists(target) ? target : source
  return merge(source, target)
}

module.exports = function () {
  var args = Array.prototype.slice.call(arguments)
  var result = resolveMerge(args.shift(), args.shift())
  while (args.length) result = resolveMerge(result, args.shift())
  return result
}
