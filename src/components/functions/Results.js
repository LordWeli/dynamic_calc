import { checkIsOperator } from './CheckValues'

export const getResult = (params) => {
  return [eval(returnStringNumbers(params))]
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
