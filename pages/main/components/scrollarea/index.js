import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Card from './components/card/index.js';

import people from '../../../../assets/data/people.js';

const List = (props) => people.map((person, index) => <Card nav={props.nav} key={index} p={person} /> )

export default (props) => <ScrollView style={styles.root}><List nav={props.nav} /></ScrollView>

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})
