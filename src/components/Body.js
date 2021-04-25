import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import ButtonsBody from './buttons/ButtonsBody'

export default function(props) {
  const [numbers, setNumbers] = useState();

  const updateSetNumbers = (value) => {
    setNumbers(value)
  }

  return (
    <View style={styles(props).container}>
      <View style={styles(props).areaContainer}>
        <TextInput editable={false} style={styles(props).textArea} textAlign='right' value={numbers}/>
        <ButtonsBody updateState={updateSetNumbers} theme={props.theme}/>
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
