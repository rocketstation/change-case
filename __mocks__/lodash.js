const lodash = jest.genMockFromModule('lodash')

lodash.camelCase = jest.fn()

lodash.kebabCase = jest.fn()

lodash.snakeCase = jest.fn()

lodash.toUpper = jest.fn()

lodash.upperFirst = jest.fn()

module.exports = lodash
