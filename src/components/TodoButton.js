import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const TodoButton = ({ name, complete, onPress }) => (
  <TouchableHighlight
    style={styles.button}
    underlayColor="#efefef"
    onPress={onPress}>
    <Text
      style={[
        styles.text,
        complete ? styles.complete : null,
        name === 'Delete' ? styles.delete : null,
      ]}>
      {name}
    </Text>
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
  text: {
    color: '#666',
  },
  complete: {
    fontWeight: 'bold',
    color: 'green',
  },
  delete: {
    color: 'rgba(175,47,47, 1)',
  },
});

export default TodoButton;
