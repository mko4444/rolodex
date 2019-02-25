import React from 'react';
import { Animated, Dimensions, StyleSheet, Image, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
    }
  }
  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {toValue: 1, duration: 500}).start();
  }
  render() {
    let { fadeAnim } = this.state;
    return(
      <SafeAreaView style={styles.page}>
        <Animated.View style={{opacity: fadeAnim}}>
          <StatusBar barStyle="light-content" />
          <TouchableOpacity
            activeOpacity={.5}
            style={styles.button}
            onPress={() => this.props.nav.push('OnBoarding')}
          >
            <Text style={styles.buttontext}>Let's begin</Text>
          </TouchableOpacity>
          <Animated.Image style={[styles.image, {opacity: fadeAnim}]} source={require('../../assets/splash.png')} />
        </Animated.View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    height: height,
    width: width,
    flexDirection: "column",
    backgroundColor: '#4392F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height,
    width: width,
    zIndex: 1
  },
  button: {
    height: 50,
    width: width - 80,
    position: 'absolute',
    left: 40,
    bottom: 60,
    backgroundColor: "#72ADF4",
    zIndex: 2,
    borderRadius: 50,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  }
});
