import React from 'react';
import { StyleSheet, Text } from 'react-native';
import TodoButton from './TodoButton';

const DeleteButton = ({ deleteTodo }) => (
  <TodoButton onPress={deleteTodo}>
    <Text style={styles.text}>Delete</Text>
  </TodoButton>
);

const styles = StyleSheet.create({
  text: {
    color: 'rgba(175,47,47, 1)',
  },
});

export default DeleteButton;
