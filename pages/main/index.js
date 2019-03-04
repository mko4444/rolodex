import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, ScrollView, Animated, TouchableOpacity, Easing, TouchableWithoutFeedback } from 'react-native';
import Nav from './components/nav.js';
import ScrollArea from './components/scrollarea/index.js';
var width = Dimensions.get('window').width, height = Dimensions.get('window').height;

export default (props) =>
  <SafeAreaView style={styles.view}>
    <Nav />
    <ScrollArea navigation={props.navigation} />
  </SafeAreaView>

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
