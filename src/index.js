import {
  camelCase,
  kebabCase,
  snakeCase,
  toUpper,
  upperFirst,
} from 'lodash'

const changeCase = (fn) => (...args) => fn(args)

export const cl = changeCase(camelCase)

export const cu = changeCase((v) => upperFirst(camelCase(v)))

export const sl = changeCase(snakeCase)

export const su = changeCase((v) => toUpper(snakeCase(v)))

export const k = changeCase(kebabCase)
