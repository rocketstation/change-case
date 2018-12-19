const camel = require('just-camel-case')
const kebab = require('just-kebab-case')
const pascal = require('just-pascal-case')
const snake = require('just-snake-case')

function changeCase (fn) {
  return function () {
    const arr = []

    for (let arg = 0; arg < arguments.length; ++arg) arr.push(arguments[arg])

    return fn(arr.join(' '))
  }
}

module.exports = {
  cl: changeCase(camel),
  cu: changeCase(pascal),
  sl: changeCase(snake),
  su: (v) => changeCase(snake)(v).toUpperCase(),
  k: changeCase(kebab),
}
