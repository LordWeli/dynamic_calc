import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommandButton from './CommandButton';

export default function(props) {
  const button_text = [
    {
      line: ['C', '%', '*', '←']
    },
    {
      line: ['7', '8', '9', '/']
    },
    {
      line: ['4', '5', '6', '-']
    },
    {
      line: ['1', '2', '3', '+']
    },
    {
      line: ['≠', '0', '.', '=']
    }
  ]

  return (
    <View style={styles.marginAreaButton}>
      {
        button_text.map((titles, titles_index) => {
          return (
            <View style={styles.buttonAreaContainer} key={titles_index}>
              {
                titles.line.map((text, text_index) => {
                  return (
                    <CommandButton valueButton={text} key={text_index} updateNumber={props.updateState} clearInput={props.clearInput} theme={props.theme} getAllResults={props.getAllResults}/>
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
