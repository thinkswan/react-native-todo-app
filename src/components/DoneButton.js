import React from 'react';
import { StyleSheet, Text } from 'react-native';
import TodoButton from './TodoButton';

const DoneButton = ({ complete, toggleComplete }) => (
  <TodoButton onPress={toggleComplete}>
    <Text style={[styles.text, complete && styles.complete]}>Done</Text>
  </TodoButton>
);

const styles = StyleSheet.create({
  text: {
    color: '#666',
  },
  complete: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default DoneButton;
