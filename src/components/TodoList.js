import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => (
  <View>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    ))}
  </View>
);

export default TodoList;
