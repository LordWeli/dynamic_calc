import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CommandButtons from './buttons/ButtonsBody'

export default function() {
  return (
    <View style={styles.container}>
      <View style={styles.areaContainer}>
        <TextInput editable={false} style={styles.textArea}/>
        <CommandButtons/>
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
  },
  areaContainer: {
    width: '90%',
    height: '95%'
  },
  textArea: {
    borderColor: '#b7b7b7',
    borderWidth: 1,
    width: '100%',
    height: 200
  },
});
