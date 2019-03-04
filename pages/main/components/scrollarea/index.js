import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import Card from './components/card/index.js';
import db from '../../../../assets/config';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfPeople: []
    }
  }
  render() {
    db.collection('contacts').get().then((contacts) =>
      this.setState({listOfPeople: contacts.docs.map(doc => doc.data())})
    )
    return(
      <ScrollView style={styles.root}>
        {
          this.state.listOfPeople.map((x, index) => <Card key={index} navigation={this.props.navigation} p={x} />)
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
