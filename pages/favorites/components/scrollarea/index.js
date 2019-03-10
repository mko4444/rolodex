import React from 'react';
import { ScrollView, Dimensions, StyleSheet } from 'react-native';
import Card from './components/card.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfGroups: [
        {
          "img": require("../../../../assets/shared/sonoma.jpg"),
          "title": "Hiring",
          "desc": "People who are experienced in hiring that I can go to for advice if needed."
        }, {
          "img": require("../../../../assets/shared/sonoma.jpg"),
          "title": "Hiring",
          "desc": "People who are experienced in hiring that I can go to for advice if needed."
        }
      ]
    }
  }
  render() {
    return(
      <ScrollView style={styles.root}>
        {
          this.state.listOfGroups.map((x, index) => <Card key={index} navigation={this.props.navigation} p={x} />)
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: width,
    flex: 1,
  },
})

// <Card navigation={props.navigation} p={c} />
