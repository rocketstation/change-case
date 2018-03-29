import {
  camelCase,
  kebabCase,
  snakeCase,
  toUpper,
  upperFirst,
} from 'lodash'

import {
  cl,
  cu,
  sl,
  su,
  k,
} from './index'

jest.mock('lodash')

it('changes to camel lower case', () => {
  cl()

  expect(camelCase).toBeCalled()
})

it('changes to camel upper case', () => {
  cu()

  expect(camelCase).toBeCalled()
  expect(upperFirst).toBeCalled()
})

it('changes to snake lower case', () => {
  sl()

  expect(snakeCase).toBeCalled()
})

it('changes to snake upper case', () => {
  su()

  expect(snakeCase).toBeCalled()
  expect(toUpper).toBeCalled()
})

it('changes to kebab case', () => {
  k()

  expect(kebabCase).toBeCalled()
})



