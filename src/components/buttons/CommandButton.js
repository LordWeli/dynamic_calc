import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function(props) {
  const operators = ['C', '%', '*', '←', '/', '-', '+', '.', '=', '≠']

  const getButtonText = (value) => {
    if(checkIsOperator(value)) { getOperator(value) }
    if(checkIsNumeric(value)) { getNumber(value) }
  }

  const checkIsOperator = (value) => {
    return operators.includes(value)
  }

  const checkIsNumeric = (value) => {
    return /^-?\d+$/.test(value)
  }

  const getNumber = (value) => {
    console.log('Number')
  }

  const getOperator = (value) => {
    console.log('Operator')
  }

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={getButtonText(props.valueButton)}>
      <Text style={styles.textButton}>{props.valueButton}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    color: '#2e3436',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#e7e7e7',
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontFamily: 'Futura',
    fontSize: 35
  }
})
