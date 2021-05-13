const operators = ['%', '*', '/', '-', '+', '≠']

export const checkIsOperator = (value) => {
  return operators.includes(value)
}

export const checkIsNumeric = (value) => {
  return /^-?\d+$/.test(value) || value == '.'
}
