import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default () =>
  <View style={styles.nav}>
    <View style={styles.nav_bounds} />
    <Text style={styles.nav_bar_title}>Rolodex</Text>
    <View style={styles.nav_bounds}>
      <Image source={require('../../../assets/shared/plus.png')} width={24} height={24} />
    </View>
  </View>

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nav: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  nav_bar_title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0B2027",
  },
  nav_bounds: {
    height: 24,
    width: 24,
  },
});
