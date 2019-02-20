import React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Tag from './components/tag.js';
import Score from './components/score.js';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Tags = (props) => props.tags.map((tag, index) => <Tag tag={tag} key={index} /> )

export default (props) =>
  <TouchableOpacity style={styles.card} onPress={() => props.nav.push('Profile')}>
    <View style={styles.card__inner}>
      <View style={styles.left}>
        <Text style={styles.card_left_title}>{props.p.firstname + " " + props.p.lastname}</Text>
        <Text style={styles.card_left_bio}>{props.p.bio}</Text>
        <View style={styles.card_cont}>
          <Tags tags={props.p.tags} />
        </View>
      </View>
      <View style={styles.right}>
        <Score value={props.p.score} />
      </View>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    shadowColor: "#0B2027",
    shadowOffset: {width: 0, height: 1 },
    shadowOpacity: .05,
    shadowRadius: 0,
    marginBottom: 1,
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
    height: 100,
    zIndex: 1,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  right: {
    position: "absolute",
    right: 0,
    height: 100,
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
  }
});
