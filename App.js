import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Heading from './src/components/Heading';
import TextInput from './src/components/TextInput';
import TodoList from './src/components/TodoList';

let todoIndex = 0;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');

  const submitTodo = () => {
    if (inputValue.trim().length === 0) {
      console.warn('TextInput: inputValue is empty');
      return;
    }

    const todo = {
      id: todoIndex,
      title: inputValue,
      complete: false,
    };

    todoIndex += 1;

    setTodos([...todos, todo]);
    setInputValue('');

    console.log(`Successfully added todo: ${todo} ${JSON.stringify(todo)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <View>
          <Heading />
          <TextInput
            inputValue={inputValue}
            onChange={value => setInputValue(value)}
          />
          <TodoList todos={todos} />
          <Button onSubmit={submitTodo} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
