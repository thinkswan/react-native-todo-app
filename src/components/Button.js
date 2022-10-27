import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Button = ({ onSubmit }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      style={styles.button}
      underlayColor="#efefef"
      onPress={() => onSubmit()}>
      <Text style={styles.submit}>Submit</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 15,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    width: 200,
    height: 50,
  },
  submit: {
    fontWeight: '600',
    color: '#666',
  },
});

export default Button;
