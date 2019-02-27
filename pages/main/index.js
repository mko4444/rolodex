import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, ScrollView, Animated } from 'react-native';
import Nav from './components/nav.js';
import ScrollArea from './components/scrollarea/index.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const bottomsUp = (value) => value.interpolate({
  inputRange: [0, 1],
  outputRange: [200, 0],
});

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeDrawer: new Animated.Value(0),
    }
  }

  static navigationOptions = {
    visible: false,
  };

  openDrawer() {
    this.state.fadeDrawer.setValue(0);
    Animated.timing(
      this.state.fadeDrawer,
      {
        toValue: 1,
        duration: 200,
      },
    ).start();
  }

  render() {
    let { fadeDrawer } = this.state;
    return(
      <SafeAreaView style={styles.view}>
        <Nav onPress={this.openDrawer} />
        <ScrollArea nav={this.props.nav} />
        <SafeAreaView style={[styles.drawer, {opacity: fadeDrawer}]}>

        </SafeAreaView>
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
  drawer: {
    height: 200,
    width: width,
    zIndex: 99999,
    backgroundColor: '#fff',
    position: "absolute",
    shadowColor: "#0D1B2C",
    shadowOffset: {width: 0, height: -2 },
    shadowOpacity: .50,
    shadowRadius: 150,
  },
});
