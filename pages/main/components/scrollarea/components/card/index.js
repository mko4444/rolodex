import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Tag from './components/tag.js';
import Score from './components/score.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Tags = (props) =>  props.tags ? props.tags.map((tag, index) => <Tag tag={tag} key={index} /> ) : null

export default (props) =>
  <TouchableOpacity activeOpacity={.6} style={styles.card} onPress={(p) => props.navigation.push('IndividualPerson', {id: props.p.id})}>
    <View style={styles.card__inner}>
      <View style={styles.left}>
        <Text style={styles.card_left_title}>{props.p.first_name + " " + props.p.last_name}</Text>
        <Text style={styles.card_left_bio}>{props.p.description}</Text>
        <View style={styles.card_cont}>
          <Tags tags={props.p.tags} />
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.score_string}>Close friend</Text>
      </View>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  card: {
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 16,
    flex: 1,
    borderRadius: 5,
    shadowColor: "#0D1B2C",
    shadowOffset: {width: 0, height: 4 },
    shadowOpacity: .05,
    shadowRadius: 1,
    backgroundColor: "white",
  },
  card__inner: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    height: 80,
    zIndex: 1,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  right: {
    position: "absolute",
    right: 0,
    height: 80,
    zIndex: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  card_left_title: {
    color: "#0B2027",
    fontSize: 20,
    fontWeight: "600",
  },
  card_left_bio: {
    color: "#0B2027",
    opacity: .5,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 2,
    marginBottom: 2,
  },
  card_cont: {
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  score_string: {
    fontSize: 16,
    color: "rgb(67,146,241)",
    fontWeight: "600",
    textTransform: "capitalize",
  }
});
