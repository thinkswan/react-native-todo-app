import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Todo = ({ todo: { title } }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 14,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { widht: 2, height: 2 },
    shadowRadius: 3,
  },
  todoText: {
    fontSize: 17,
  },
});

export default Todo;
