import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default (props) =>
  <View style={styles.tag}>
    <Text style={styles.text}>{props.tag}</Text>
  </View>

const styles = StyleSheet.create({
  tag: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    width: "auto",
    flex: -1,
    backgroundColor: "rgba(11,32,39,.05)",
    marginRight: 5,
    marginTop: 5,
    borderRadius: 5,
  },
  text: {
    color: "rgba(11,32,39,.25)",
    textTransform: "capitalize",
    fontWeight: "600",
  }
})
