import { checkIsOperator } from './CheckValues'

export const getResult = (params) => {
  return String(eval(returnStringNumbers(params))).split('')
}

const returnStringNumbers = (params) => {
  return String(checkLastElement(params).join(''))
}

const checkLastElement = (params) => {
  if(checkIsOperator(params.slice(-1)[0])){
    params.splice(-1, 1)
    return params
  }

  return params
}

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
