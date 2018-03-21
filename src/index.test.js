import {
  camelCase,
  kebabCase,
  snakeCase,
  toUpper,
  upperFirst,
} from 'lodash'

import * as changeCase from './index'

jest.mock('lodash')


it('changes to camel lower case', () => {
  changeCase.cl('foo', 'bar')

  expect(camelCase).toBeCalledWith(['foo', 'bar'])
})
it('changes to camel upper case', () => {
  changeCase.cu('foo', 'bar')

  expect(camelCase).toBeCalledWith(['foo', 'bar'])
  expect(upperFirst).toBeCalledWith('fooBar')
})
it('changes to snake lower case', () => {
  changeCase.sl('foo', 'bar')

  expect(snakeCase).toBeCalledWith(['foo', 'bar'])
})
it('changes to snake upper case', () => {
  changeCase.su('foo', 'bar')

  expect(snakeCase).toBeCalledWith(['foo', 'bar'])
  expect(toUpper).toBeCalledWith('foo_bar')
})
it('changes to kebab case', () => {
  changeCase.k('foo', 'bar')

  expect(kebabCase).toBeCalledWith(['foo', 'bar'])
})



