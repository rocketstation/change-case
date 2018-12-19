import * as changeCase from './index'

it('changes to camel lower case', () => { expect(changeCase.cl('foo bar')).toEqual('fooBar') })

it('changes to camel upper case', () => { expect(changeCase.cu('foo bar')).toEqual('FooBar') })

it('changes to snake lower case', () => { expect(changeCase.sl('foo bar')).toEqual('foo_bar') })

it('changes to snake upper case', () => { expect(changeCase.su('foo bar')).toEqual('FOO_BAR') })

it('changes to kebab case', () => { expect(changeCase.k('foo bar')).toEqual('foo-bar') })
