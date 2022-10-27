import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

const TodoButton = ({ onPress, children }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor="#efefef"
    onPress={onPress}>
    {children}
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    marginRight: 5,
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default TodoButton;
