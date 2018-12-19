import camel from 'just-camel-case'
import kebab from 'just-kebab-case'
import pascal from 'just-pascal-case'
import snake from 'just-snake-case'

const changeCase = (fn) => (...args) => fn(args.join(' '))

export const cl = changeCase(camel)
export const cu = changeCase(pascal)
export const sl = changeCase(snake)
export const su = (v) => changeCase(snake)(v).toUpperCase()
export const k = changeCase(kebab)
