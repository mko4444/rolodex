import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Nav from './components/nav.js';
import ScrollArea from './components/scrollarea/index.js';

export default () =>
  <View style={styles.root}>
    <Nav />
    <ScrollArea />
  </View>

const styles = StyleSheet.create({
  root: {
    width: "100%"
  }
})
