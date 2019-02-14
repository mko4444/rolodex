import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Nav from './components/nav.js';
import ScrollArea from './components/scrollarea/index.js';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    visible: false,
  };

  render() {
    return(
      <SafeAreaView style={styles.view}>
        <Nav />
        <ScrollArea nav={this.props.nav} />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
