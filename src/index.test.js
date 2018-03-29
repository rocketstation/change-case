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
  changeCase.cl()

  expect(camelCase).toBeCalled()
})

it('changes to camel upper case', () => {
  changeCase.cu()

  expect(camelCase).toBeCalled()
  expect(upperFirst).toBeCalled()
})

it('changes to snake lower case', () => {
  changeCase.sl()

  expect(snakeCase).toBeCalled()
})

it('changes to snake upper case', () => {
  changeCase.su()

  expect(snakeCase).toBeCalled()
  expect(toUpper).toBeCalled()
})

it('changes to kebab case', () => {
  changeCase.k()

  expect(kebabCase).toBeCalled()
})



