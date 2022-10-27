import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ type, todos, toggleComplete, deleteTodo }) => {
  const getVisibleTodos = () => {
    if (type === 'Active') {
      return todos.filter(todo => !todo.complete);
    }
    if (type === 'Completed') {
      return todos.filter(todo => todo.complete);
    }

    return todos;
  };

  return (
    <View>
      {getVisibleTodos().map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </View>
  );
};

export default TodoList;
