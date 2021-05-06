import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function(props) {
  const operators = ['C', '%', '*', '←', '/', '-', '+', '=', '≠']

  const getButtonText = (value) => {
    if(checkIsOperator(value)) { getOperator(value) }
    if(checkIsNumeric(value)) { getNumber(value) }
    if(value == 'C') { props.clearInput() }
  }

  const checkIsOperator = (value) => {
    return operators.includes(value)
  }

  const checkIsNumeric = (value) => {
    return /^-?\d+$/.test(value) || value == '.'
  }

  const getNumber = (value) => {
    props.updateNumber(value)
  }

  const getOperator = (value) => {
    // props.updateNumber(value)
  }

  return (
    <TouchableOpacity style={styles(props).buttonStyle} onPress={() => getButtonText(props.valueButton)}>
      <Text style={styles(props).textButton}> {props.valueButton} </Text>
    </TouchableOpacity>
  )
}

const styles = (props) => StyleSheet.create({
  buttonStyle: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: props.theme.button.background,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textButton: {
    color: props.theme.color,
    fontFamily: 'Futura',
    fontSize: 35
  }
})
