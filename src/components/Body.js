import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CommandButtons from './buttons/ButtonsBody'

export default function() {
  const [numbers, setNumbers] = useState(0);

  const updateSetNumbers = (value) => {
    setNumbers(value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaContainer}>
        <TextInput editable={false} style={styles.textArea} textAlign='right' value={numbers}/>
        <CommandButtons updateState={updateSetNumbers}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  areaContainer: {
    width: '90%',
    height: '95%'
  },
  textArea: {
    borderColor: '#b7b7b7',
    borderWidth: 1,
    width: '100%',
    height: 200,
    fontSize: 45
  }
});
