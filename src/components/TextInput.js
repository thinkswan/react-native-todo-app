import React from 'react';
import { StyleSheet, TextInput as RNTextInput, View } from 'react-native';

const TextInput = ({ inputValue, onChange }) => (
  <View style={styles.inputContainer}>
    <RNTextInput
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#cacaca"
      selectionColor="#666"
      value={inputValue}
      onChangeText={onChange}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    height: 60,
  },
});

export default TextInput;
