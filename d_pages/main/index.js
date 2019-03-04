import React from 'react';
import { StyleSheet, Dimensions, Text, View, SafeAreaView, ScrollView, Animated, TouchableOpacity, Easing, TouchableWithoutFeedback } from 'react-native';
import { createDrawerNavigator,createAppContainer } from 'react-navigation';
import Nav from './components/navigation.js';
import ScrollArea from './components/scrollarea/index.js';
import NewNote from '../new-note/index.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const bottomsUp = (drawer) => drawer.interpolate({
  inputRange: [0, 1],
  outputRange: [200, 0],
});

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeDrawer: new Animated.Value(0),
      bottomsUp: new Animated.Value(-270),
      newNote: "false",
      newPerson: "false",
    }
  }
  closeModal() {
    this.setState({newNote: false, newPerson: false, });
    Animated.sequence([
      Animated.timing(this.state.bottomsUp, { toValue: -270, duration: 150, easing: Easing.linear }),
      Animated.timing(this.state.fadeDrawer, { toValue: 0, duration: 50, easing: Easing.linear })
    ]).start();
  }
  render() {
    return(
      <SafeAreaView style={styles.view}>
        <Nav onPress={() =>
          Animated.sequence([
            Animated.timing(this.state.fadeDrawer, { toValue: 1, duration: 50, easing: Easing.linear }),
            Animated.timing(this.state.bottomsUp, { toValue: 0, duration: 100, easing: Easing.linear })
          ]).start()
        } />
        <ScrollArea navigation={this.props.navigation} />
        <Animated.View
          style={[styles.drawer, {
            opacity: this.state.fadeDrawer,
            bottom: this.state.bottomsUp
          }
        ]}>
          <TouchableOpacity activeOpacity={.75} onPress={() => {
            this.closeModal();
            this.props.navigation.push('NewNote');
          }}>
            <View style={styles.card_choice}>
              <Text style={styles.card_choice_text}>New Note</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.75} onPress={() => {
            this.closeModal();
            this.props.navigation.push('NewPerson');
          }}>
            <View style={styles.card_choice}>
              <Text style={styles.card_choice_text}>New Person</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={.75} onPress={this.closeModal.bind(this)} style={styles.card_cancel}>
            <Text style={styles.card_cancel_text}>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
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
    height: 270,
    width: width,
    zIndex: 99999,
    backgroundColor: '#fff',
    position: "absolute",
    shadowColor: "#0D1B2C",
    shadowOffset: {width: 0, height: -2 },
    shadowOpacity: .50,
    shadowRadius: 150,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card_cancel: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: width - 40,
    borderRadius: 5,
    backgroundColor: "rgba(13,27,44,.05)",
    marginTop: 20,
  },
  card_choice: {
    height: 64,
    width: width - 40,
    borderRadius: 5,
    backgroundColor: "rgba(67,146,241,1)",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  card_choice_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  card_cancel_text: {
    color: "rgba(13,27,44,.25)",
    fontSize: 20,
    fontWeight: "600",
  }
});

const MainCont = (props) => createDrawerNavigator({
  Base: { screen: <Main nav={props.nav}/> },
  NewNote: { screen: <NewNote nav={props.nav} /> },
});
export default MainCont;
