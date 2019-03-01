import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Card from './components/card/index.js';
import people from '../../../../assets/data/people.js';

export default (props) =>
  <ScrollView style={styles.root}>
    {
      people.map((person, index) =>
        <Card navigation={props.navigation} key={index} p={person} />
      )
    }
  </ScrollView>

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
