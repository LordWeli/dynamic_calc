import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommandButton from './CommandButton';

export default function() {
  const button_text = [
    {
      line: ['C', '%', '*', '←'],
      method: 'getButtonText()'
    },
    {
      line: ['7', '8', '9', '/'],
      method: 'getButtonText()'
    },
    {
      line: ['4', '5', '6', '-'],
      method: 'getButtonText()'
    },
    {
      line: ['1', '2', '3', '+'],
      method: 'getButtonText()'
    },
    {
      line: ['≠', '0', '.', '='],
      method: 'getButtonText()'
    }
  ]

  return (
    <View style={styles.marginAreaButton}>
      {
        button_text.map((titles) => {
          return (
            <View style={styles.buttonAreaContainer}>
              {
                titles.line.map((text) => {
                  return (
                    <CommandButton valueButton={text} method={titles.method}/>
                  )
                })
              }
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  buttonAreaContainer: {
    flexDirection: 'row',
    height: 80,
  },
  marginAreaButton: {
    marginTop: 10,
  }
})
