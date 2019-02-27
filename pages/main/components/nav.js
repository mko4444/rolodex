import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <SafeAreaView style={styles.nav}>
        <View style={styles.nav_bounds} />
        <View>
          <Image style={styles.dex} source={require('../../../assets/shared/Rolodex.png')} />
        </View>
        <View style={styles.nav_bounds}>
          <TouchableOpacity onPress={this.props.onPress}><Image source={require('../../../assets/shared/plus.png')} /></TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  nav: {

    width: "100%",
    height: 120,
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
    marginLeft: 20,
    marginRight: 20,
  },
});
