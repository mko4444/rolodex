import React from 'react';
import { SafeAreaView, Dimensions, StyleSheet, StatusBar } from 'react-native';
import Nav from '../main/components/nav.js';
import ScrollArea from './components/scrollarea/index.js';
var width = Dimensions.get('window').width, height = Dimensions.get('window').height;

export default props =>
  <SafeAreaView style={styles.view}>
    <StatusBar />
    <Nav />
    <ScrollArea props={props.navigation} />
  </SafeAreaView>

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#rgba(13,27,44,.02)',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
