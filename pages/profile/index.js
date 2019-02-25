import React from 'react';
import Top from './components/top/index.js';
import List from './components/list/index.js';
import Nav from './components/nav.js';
import { StyleSheet, View, SafeAreaView } from 'react-native';

export default class extends React.Component {
  static navigationOptions = {
  }
  render() {
    return(
      <SafeAreaView>
        <Top />
        <List />
      </SafeAreaView>
    )
  }
}
