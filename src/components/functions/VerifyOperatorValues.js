import { checkIsOperator } from './CheckValues'
import { checkLastElement } from './Results'

export const removeLastValue = (params) => {
  let values = params

  values.pop()

  return values.join(',').split(',')
}

export const vefiryLastOperator = (params, value) => {
  let last_value = checkIsOperator(params.slice(-1)[0])
  let current_value = checkIsOperator(value.slice(-1)[0])

  return last_value && current_value ? true : false
}

export const checkFirstOperator = (params, value) => {
  return params.length == 0 && checkIsOperator(value) && value !== '-' ? true : false
}

export const numberPercentage = (params) => {
  let current_value = checkLastElement(params)
  let last_value = current_value.split(/[-+*./]+/).slice(-1)[0]

  let percentage = eval(current_value.join(''))/100

  return String(percentage).split('')
}
