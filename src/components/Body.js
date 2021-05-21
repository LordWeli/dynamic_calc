import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import ButtonsBody from './buttons/ButtonsBody'
import * as Results from './functions/Results'

export default function(props) {
  const [numbers, setNumbers] = useState([]);

  const updateSetNumbers = (value) => {
    setNumbers([...numbers, value])
  }

  const getAllResults = () => {
    setNumbers(Results.getResult(numbers))
  }

  const clearInput = () => {
    setNumbers([])
  }

  const lastValue = () => {
    let values = Results.removeLastValue(numbers)

    setNumbers(values)
  }

  return (
    <View style={styles(props).container}>
      <View style={styles(props).areaContainer}>
        <TextInput editable={false} style={styles(props).textArea} textAlign='right' value={numbers.join(' ')}/>
        <ButtonsBody updateState={updateSetNumbers} clearInput={clearInput} theme={props.theme}
          getAllResults={getAllResults} removeLastValue={lastValue}/>
      </View>
    </View>
  );
}

const styles = (props) => StyleSheet.create({
  container: {
    backgroundColor: props.theme.background,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  areaContainer: {
    backgroundColor: props.theme.background,
    width: '90%',
    height: '95%',
  },
  textArea: {
    borderColor: props.theme.input.borderColor,
    borderWidth: 1,
    width: '100%',
    height: 200,
    fontSize: 45,
    color: props.theme.color,
  }
});
