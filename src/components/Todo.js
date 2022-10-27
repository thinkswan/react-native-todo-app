import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeleteButton from './DeleteButton';
import DoneButton from './DoneButton';

const Todo = ({
  todo: { id, title, complete },
  toggleComplete,
  deleteTodo,
}) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>{title}</Text>

    <View style={styles.buttons}>
      <DoneButton
        complete={complete}
        toggleComplete={() => toggleComplete(id)}
      />
      <DeleteButton deleteTodo={() => deleteTodo(id)} />
    </View>
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
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Todo;
