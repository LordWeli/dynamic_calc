import React from 'react';
import { View, StyleSheet } from 'react-native';
import CommandButton from './CommandButton';

export default function() {
  return (
    <View style={styles.marginAreaButton}>
      <View style={styles.buttonAreaContainer}>
        <CommandButton valueNumber={'C'}/>
        <CommandButton valueNumber={'%'}/>
        <CommandButton valueNumber={'*'}/>
        <CommandButton valueNumber={'←'}/>
      </View>
      <View style={styles.buttonAreaContainer}>
        <CommandButton valueNumber={7}/>
        <CommandButton valueNumber={8}/>
        <CommandButton valueNumber={9}/>
        <CommandButton valueNumber={'/'}/>
      </View>
      <View style={styles.buttonAreaContainer}>
        <CommandButton valueNumber={4}/>
        <CommandButton valueNumber={5}/>
        <CommandButton valueNumber={6}/>
        <CommandButton valueNumber={'-'}/>
      </View>
      <View style={styles.buttonAreaContainer}>
        <CommandButton valueNumber={1}/>
        <CommandButton valueNumber={2}/>
        <CommandButton valueNumber={3}/>
        <CommandButton valueNumber={'+'}/>
      </View>
      <View style={styles.buttonAreaContainer}>
        <CommandButton valueNumber={'≠'}/>
        <CommandButton valueNumber={0}/>
        <CommandButton valueNumber={'.'}/>
        <CommandButton valueNumber={'='}/>
      </View>
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
