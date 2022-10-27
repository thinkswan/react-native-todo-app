import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

const TabBarItem = ({ type, title, withBorder, setType }) => {
  const selected = type === title;

  return (
    <TouchableHighlight
      style={[
        styles.item,
        withBorder && styles.border,
        selected && styles.selected,
      ]}
      underlayColor="#efefef"
      onPress={setType}>
      <Text style={[styles.itemText, selected && styles.bold]}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#777',
  },
  selected: {
    backgroundColor: '#fff',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TabBarItem;
