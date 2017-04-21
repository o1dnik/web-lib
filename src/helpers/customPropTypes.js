import {PropTypes} from 'react'

export const as = (...args) => PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func
])(...args)
