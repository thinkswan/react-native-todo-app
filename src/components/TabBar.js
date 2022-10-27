import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({ type, setType }) => (
  <View style={styles.container}>
    <TabBarItem type={type} title="All" setType={() => setType('All')} />
    <TabBarItem
      type={type}
      title="Active"
      withBorder
      setType={() => setType('Active')}
    />
    <TabBarItem
      type={type}
      title="Completed"
      withBorder
      setType={() => setType('Completed')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 70,
  },
});

export default TabBar;
