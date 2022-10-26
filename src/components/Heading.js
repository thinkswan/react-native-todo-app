import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>todos</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
  },
  headerText: {
    fontSize: 72,
    fontWeight: '100',
    textAlign: 'center',
    color: 'rgba(175,47,47,.25)',
  },
});

export default Heading;
