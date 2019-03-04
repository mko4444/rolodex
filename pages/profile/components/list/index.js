import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Card from './components/card.js';
var moment = require('moment');

export default (props) => {
  console.log(props.p)
  let list = props.p.map((card, index) =>
    <Card
      title={card.title}
      date={moment(card.date).format("MMMM Do, YYYY").toString()}
      text={card.text}
      key={index}
      last={index === props.p.length-1}
    />
  );
  return(
    <ScrollView>
      {list}
      <View style={{height: 20}} />
    </ScrollView>
  )
}
