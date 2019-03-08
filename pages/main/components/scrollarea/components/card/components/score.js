import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function getStringForValue(a) {
  return a > .75
    ? "close friend"
    : .75 >= a && a > .5
      ? "friend"
      : .5 >= a && a > .25
        ? "acquaintance"
        : .25 >= a
          ? "not close"
          : null
}

export default (props) =>
  <View style={styles.root}>
    <View style={styles.score_cont}>
      <Text style={styles.score_value}>{props.value}</Text>
    </View>
    <Text style={styles.score_string}>{getStringForValue(props.value)}</Text>
  </View>

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-end",
  },
  score_cont: {
    flexDirection: "row",
    alignItems: "center",
  },
  score_value: {
    color: "#4392F1",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  score_string: {
    fontSize: 16,
    color: "rgba(67,146,241,.25)",
    fontWeight: "600",
    textTransform: "capitalize",
  }
})
