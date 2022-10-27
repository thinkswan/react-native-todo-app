import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Heading from './src/components/Heading';
import TextInput from './src/components/TextInput';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <View>
          <Heading />
          <TextInput
            inputValue={inputValue}
            onChange={value => setInputValue(value)}
          />
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
