import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default (props) =>
  <SafeAreaView style={[styles.view, {shadowColor: "#0D1B2C", shadowOffset: {width: 0, height: 2 }, shadowOpacity: .07, shadowRadius: 50}]}>
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Main')} style={styles.nav_bounds}><Image source={require('../../../assets/shared/back.png')} /></TouchableOpacity>
      <View style={{overflow: "hidden", marginTop: 25, zIndex: 3, height: width/4, width: width/4, borderWidth: 2, borderColor: "rgba(67,146,241,1)", borderRadius: 50, backgroundColor: 'rgba(67,146,241,.25)'}}>
        <Image source={require("../../../assets/shared/matthew.png")} style={{resizeMode: "cover", height: width/4, width: width/4}} />
      </View>
      <View style={styles.nav_bounds} />
    </View>
    <View style={styles.view}>
      <Text style={{marginTop: 15, fontSize: 30, fontWeight: "600", color: "#0D1B2C"}}>Matthew Kochakian</Text>
      <Text style={{marginTop: 5, marginBottom: 25, fontSize: 16, fontWeight: "600", color: "rgba(13,27,44,.25)"}}>This is me, so no description needed.</Text>
    </View>
  </SafeAreaView>

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "white",

  },
  nav: {
    marginTop: -100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "white",
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  nav_bounds: {
    marginTop: 24,
    height: 24,
    width: 24,
  },
});
