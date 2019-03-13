import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, StyleSheet, Dimensions, Animated } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(width*10)
    }
  }
  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: width/2,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }
  render() {
    return(
      <SafeAreaView style={styles.view}>
        <Animated.Image style={[styles.dex, {width: this.state.fadeAnim}]} source={require('../../assets/shared/Rolodex.png')} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: height,
    width: width,
  },
  dex: {
    width: width/2,
    marginBottom: 50
  }
})
