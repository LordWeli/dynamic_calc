import { checkIsOperator } from './CheckValues'

export const getResult = (params) => {
  return String(eval(returnStringNumbers(params))).split('')
}

const returnStringNumbers = (params) => {
  return String(checkLastElement(params).join(''))
}

export const checkLastElement = (params) => {
  if(checkIsOperator(params.slice(-1)[0])){
    params.splice(-1, 1)
    return params
  }

  return params
}
