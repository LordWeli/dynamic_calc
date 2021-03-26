import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function(props) {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textButton}>{props.valueNumber}</Text>
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
