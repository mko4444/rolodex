import React from 'react';
import Top from './components/top/index.js';
import List from './components/list/index.js';
import Nav from './components/nav.js';
import NewNote from './components/new-note/index.js';
import { StyleSheet, View, SafeAreaView, Dimensions, Animated, Easing } from 'react-native';
var width = Dimensions.get('window').width,
    height = Dimensions.get('window').height,
    negativeHeight = 0 - Dimensions.get('window').height

export default class extends React.Component {
  constructor(props) {
    super(props)
    getHeight =
    this.state = {
      fadeDrawer: new Animated.Value(0),
      bottom: new Animated.Value(negativeHeight),
    }
  }
  closeModal() {
    Animated.sequence([
      Animated.timing(this.state.bottom, { toValue: negativeHeight, duration: 200, easing: Easing.linear }),
      Animated.timing(this.state.fadeDrawer, { toValue: 0, duration: 50, easing: Easing.linear })
    ]).start();
  }
  openModal() {
    Animated.sequence([
      Animated.timing(this.state.fadeDrawer, { toValue: 1, duration: 50, easing: Easing.linear }),
      Animated.timing(this.state.bottom, { toValue: 0, duration: 200, easing: Easing.linear })
    ]).start()
  }
  render() {
    return(
      <SafeAreaView style={{height: height, width: width, position: "relative", backgroundColor: "#FCFDFE"}}>
        <Nav navigation={this.props.navigation} onRightPress={this.openModal.bind(this)} />
        <List />
        <Animated.View style={{
          position: "absolute",
          height: height,
          width: width,
          opacity: this.state.fadeDrawer,
          bottom: this.state.bottom,
          shadowColor: "#0D1B2C",
          shadowOffset: {width: 0, height: 1 },
          shadowOpacity: .07,
          shadowRadius: this.state.fadeDrawer,
        }}>
          <NewNote onClose={this.closeModal.bind(this)} />
        </Animated.View>
      </SafeAreaView>
    )
  }
}
