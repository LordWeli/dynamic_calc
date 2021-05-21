const operators = ['*', '/', '-', '+', '.']

export const checkIsOperator = (value) => {
  return operators.includes(value)
}

export const checkIsNumeric = (value) => {
  return /^-?\d+$/.test(value)
}

export const checkButtonToMargin = (button_value, current_value) => {
  return button_value == current_value ? 12 : 0
}
