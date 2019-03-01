import React from 'react';
import Top from './components/top/index.js';
import List from './components/list/index.js';
import Nav from './components/navigation.js';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default (props) =>
  <SafeAreaView style={{height: height, width: width, backgroundColor: "#FCFDFE"}}>
    <Nav nav={props.nav} />
    <List />
  </SafeAreaView>
