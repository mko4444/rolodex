import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default props =>
  <TouchableOpacity activeOpacity={.7} style={styles.view}>
    <View style={styles.image_cont}>
      <Image style={styles.image} source={props.p.img} />
    </View>
    <Text style={styles.tag}>group</Text>
    <Text style={styles.title}>{props.p.title}</Text>
    <Text style={styles.text}>{props.p.desc}</Text>
  </TouchableOpacity>

const styles = StyleSheet.create({
  view: {
    height: 240,
    width: width - 32,
    marginLeft: 16,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#0D1B2C",
    shadowOffset: {width: 0, height: 4 },
    shadowOpacity: .07,
    shadowRadius: 1,
    backgroundColor: "white",
    marginBottom: 16,
  },
  image_cont: {
    height: 120,
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: "100%",
    width: "100%",
  },
  tag: {
    marginLeft: 20,
    marginTop: 20,
    color: "#4392F1",
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  title: {
    marginLeft: 20,
    marginTop: 5,
    color: "#0D1B2C",
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    opacity: .5,
    color: "#0D1B2C",
    fontSize: 16,
    fontWeight: "500",
  }
})
