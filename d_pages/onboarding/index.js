import React from 'react';
import { Animated, Image, StatusBar, Dimensions, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.closeStep1Value = new Animated.Value(0);
    this.state = {
      buttonVisible: "visible",
      is_loading: false
    }
  }

  closeStep1() {
    Animated.timing(this.closeStep1Value, {
      toValue: 1,
      duration: 200,
    }).start()
  }
  openStep2() {

  }

  render() {
    const height = this.closeStep1Value.interpolate({
      inputRange: [0, 1],
      outputRange: [160, 44]
    });
    const light = this.closeStep1Value.interpolate({
      inputRange: [0, 1],
      outputRange: [1, .5]
    });
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Image source={require('../../assets/shared/Rolodex.png')} style={styles.dex} />
        </View>
        <Animated.View style={[styles.stepcont, { height: height }]}>
          <View>
          <View style={styles.step_top}>
            <Animated.View style={[styles.step_top_circle, {opacity: light}]}>
              <Text style={styles.step_top_circle_text}>1</Text>
            </Animated.View>
            <Animated.Text style={[styles.step_top_text, {opacity: light}]}>Track relationships</Animated.Text>
            <Animated.Image source={require('../../assets/shared/check.png')} style={[styles.step_top_image, {opacity: this.closeStep1Value}]} />
          </View>
          <View style={styles.step_middle}>
            <Text style={styles.step_middle_text}>bla bla bla...</Text>
          </View>
          </View>
          <Animated.View style={styles.step_bottom} style={{opacity: 1 - this.closeStep11Value, visible: this.state.buttonVisible}}>
            <TouchableOpacity
              onPress={this.closeStep1.bind(this)}
              activeOpacity={.5}
              style={styles.step_bottom_button}
            >
              <Text style={styles.step_bottom_button_text}>Got it</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.stepcont, { height: height }]}>
          <View>
          <View style={styles.step_top}>
            <Animated.View style={[styles.step_top_circle, {opacity: light}]}>
              <Text style={styles.step_top_circle_text}>2</Text>
            </Animated.View>
            <Animated.Text style={[styles.step_top_text, {opacity: light}]}>Item 2</Animated.Text>
            <Animated.Image source={require('../../assets/shared/check.png')} style={[styles.step_top_image, {opacity: this.closeStep1Value}]} />
          </View>
          <View style={styles.step_middle}>
            <Text style={styles.step_middle_text}>bla bla bla...</Text>
          </View>
          </View>
          <Animated.View style={styles.step_bottom} style={{opacity: 1 - this.closeStep11Value, visible: this.state.buttonVisible}}>
            <TouchableOpacity
              onPress={this.closeStep1.bind(this)}
              activeOpacity={.5}
              style={styles.step_bottom_button}
            >
              <Text style={styles.step_bottom_button_text}>Got it</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.stepcont, { height: height }]}>
          <View>
          <View style={styles.step_top}>
            <Animated.View style={[styles.step_top_circle, {opacity: light}]}>
              <Text style={styles.step_top_circle_text}>1</Text>
            </Animated.View>
            <Animated.Text style={[styles.step_top_text, {opacity: light}]}>Track relationships</Animated.Text>
            <Animated.Image source={require('../../assets/shared/check.png')} style={[styles.step_top_image, {opacity: this.closeStep1Value}]} />
          </View>
          <View style={styles.step_middle}>
            <Text style={styles.step_middle_text}>bla bla bla...</Text>
          </View>
          </View>
          <Animated.View style={styles.step_bottom} style={{opacity: 1 - this.closeStep11Value, visible: this.state.buttonVisible}}>
            <TouchableOpacity
              onPress={this.closeStep1.bind(this)}
              activeOpacity={.5}
              style={styles.step_bottom_button}
            >
              <Text style={styles.step_bottom_button_text}>Got it</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    width: width,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    color: "#0B2027",
    marginTop: -5,
    fontSize: 24,
    fontWeight: "600",
  },
  stepcont: {
    marginLeft: 10,
    width: width - 20,
    backgroundColor: "rgba(67, 146, 241, .10)",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  step_middle: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  step_top: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  step_top_image: {
    position: "absolute",
    right: 10,
    top: 16,
  },
  step_top_circle: {
    height: 24,
    width: 24,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(67, 146, 241, 1)",
  },
  step_top_circle_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  step_top_text: {
    color: "rgba(67, 146, 241, 1)",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 8,
  },
  step_middle_text: {
    color: "rgba(67, 146, 241, 1)",
    fontSize: 20,
    fontWeight: "500",
  },
  step_bottom: {
    height: 46,
    width: '100%',
  },
  step_bottom_button: {
    width: '100%',
    height: 46,
    backgroundColor: "rgba(67, 146, 241, .10)",
    justifyContent: "center",
    alignItems: "center",
  },
  step_bottom_button_text: {
    color: "rgba(67, 146, 241, 1)",
    fontSize: 20,
    fontWeight: "600",
  },
})

// <Text style={styles.welcome}>Welcome</Text>
