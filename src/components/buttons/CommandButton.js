import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { checkIsOperator, checkIsNumeric, checkButtonToMargin } from '../functions/CheckValues'

export default function(props) {
  const getButtonText = (value) => {
    if(checkIsOperator(value)) { getOperator(value) }
    if(checkIsNumeric(value)) { getNumber(value) }
    if(value == 'C') { props.clearInput() }
    if(value == '=') { props.getAllResults() }
    if(value == '←') { props.removeLastValue() }
  }

  const getNumber = (value) => {
    props.updateNumber(value)
  }

  const getOperator = (value) => {
    props.updateNumber(value)
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
    backgroundColor: checkIsNumeric(props.valueButton) ? props.theme.button.background : props.theme.button.backgroundOperators,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textButton: {
    color: props.theme.color,
    fontFamily: 'Futura',
    fontSize: 35,
    fontWeight: checkIsNumeric(props.valueButton) || props.valueButton == '*' ? 'normal' : 'bold',
    marginTop: checkButtonToMargin(props.valueButton, '*'),
    marginBottom: checkButtonToMargin(props.valueButton, '.')
  }
})
