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
      list: [],
      contact: [],
      id: this.props.navigation.getParam("id"),
    }
  }
  componentDidMount() {
    console.log(3)
  }
  refreshData() {
    // db.collection('contacts').doc(this.state.id).onSnapshot(doc => this.setState({contact: doc.data()}));
    console.log(2)
  }
  handleCreateList(card) {
    // let a = db.collection('contacts').doc(this.state.id),
    //     b = [],
    //     c = {"title": card.title, "date": '1/1/2019', "text": card.text},
    //     d = this.state.contact.notes ? this.state.contact.notes : []
    // for (let i = 0; i<d.length; i++) {
    //   b.push(d[i])
    // }
    // b.push(c)
    // a.set({notes: b}, { merge: true })
    console.log(1)
    this.refreshData()
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
  list(x) {
    console.log(4)
    return x ? <List p={x} /> : []
  }
  render() {
    return(
      <SafeAreaView style={{height: height, width: width, position: "relative", backgroundColor: "#FCFDFE"}}>
        <Nav navigation={this.props.navigation} p={this.state.contact} onRightPress={this.openModal.bind(this)} />
        {this.list(this.state.contact.notes)}
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
          <NewNote onCreateList={(card) => this.handleCreateList(card)} onClose={this.closeModal.bind(this)} />
        </Animated.View>
      </SafeAreaView>
    )
  }
}
