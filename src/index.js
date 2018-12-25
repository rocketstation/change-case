var camel = require('just-camel-case')
var kebab = require('just-kebab-case')
var pascal = require('just-pascal-case')
var snake = require('just-snake-case')

function changeCase(fn) {
  return function() {
    var arr = []

    for (var arg = 0; arg < arguments.length; ++arg) arr.push(arguments[arg])

    return fn(arr.join(' '))
  }
}

module.exports = {
  c: changeCase(camel),
  k: changeCase(kebab),
  p: changeCase(pascal),
  sl: changeCase(snake),
  su: (v) => changeCase(snake)(v).toUpperCase(),
}
