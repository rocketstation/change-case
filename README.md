# Change Case

Change Case is based on [just](https://github.com/angus-c/just). It provides helpers to convert strings to kebab, snake lower & upper, camel lower & upper cases

## Installation

```
npm i @rocketstation/change-case
```

## Usage

```javascript
import * as changeCase from '@rocketstation/change-case'

console.log(changeCase.cl('foo bar', ['foo', 'bar'], 'foo', 'bar')) // fooBarFooBarFooBar
console.log(changeCase.cu('foo bar', ['foo', 'bar'], 'foo', 'bar')) // FooBarFooBarFooBar
console.log(changeCase.sl('foo bar', ['foo', 'bar'], 'foo', 'bar')) // foo_bar_foo_bar_foo_bar
console.log(changeCase.su('foo bar', ['foo', 'bar'], 'foo', 'bar')) // FOO_BAR_FOO_BAR_FOO_BAR
console.log(changeCase.k('foo bar', ['foo', 'bar'], 'foo', 'bar')) // foo-bar-foo-bar-foo-bar
```

## Motivation

We were tired of writing this code again and again

## License

Change Case is licensed under the [MIT License](http://opensource.org/licenses/MIT)

Created by [RocketStation](http://rstation.io)
