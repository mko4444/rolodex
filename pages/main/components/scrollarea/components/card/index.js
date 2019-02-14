import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Tag from './components/tag.js';
import Score from './components/score.js';

const Tags = (props) => props.tags.map((tag, index) => <Tag tag={tag} key={index} /> )

export default (props) =>
  <TouchableOpacity style={styles.card} onPress={() => props.nav.push('Profile')}>
    <View style={styles.card_left}>
      <Text style={styles.card_left_title}>{props.p.firstname + " " + props.p.lastname}</Text>
      <Text style={styles.card_left_bio}>{props.p.bio}</Text>
      <View style={styles.card_cont}>
        <Tags tags={props.p.tags} />
      </View>
    </View>
    <View style={styles.card_right}>
      <Score value={props.p.score} />
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  card: {
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    shadowColor: "#0B2027",
    shadowOffset: {width: 0, height: 1 },
    shadowOpacity: .05,
    shadowRadius: 0,
    marginTop: 1,
  },
  card_left: {
    height: '100%',
    justifyContent: "center",
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
    flexDirection: "row"
  }
})
