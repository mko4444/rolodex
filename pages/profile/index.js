import React from 'react';
import Top from './components/top/index.js';
import List from './components/list/index.js';
import Nav from './components/nav.js';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  static navigationOptions = {
  }
  render() {
    return(
      <SafeAreaView style={{height: height, width: width, backgroundColor: "#FCFDFE"}}>
        <Top />
        <List />
      </SafeAreaView>
    )
  }
}
