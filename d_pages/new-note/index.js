import React from 'react';
import { View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Text, TextInput } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      note: ""
    }
  }
  onCancel() {
    this.props.navigation.closeDrawer()
  }
  onSubmit() {
    this.props.navigation.closeDrawer()
  }
  render() {
    return(
      <SafeAreaView style={styles.bounds}>
        <View style={{ height: 164, width: width, marginTop: -100, justifyContent: "flex-end" }}>
          <View style={styles.nav}>
            <View style={{alignItems: "flex-start"}}>
              <TouchableOpacity onPress={this.onCancel} style={[styles.nav_button, styles.black]}><Text style={styles.nav_button_text}>Cancel</Text></TouchableOpacity>
            </View>
            <Text style={styles.nav_title}>New Note</Text>
            <View style={{alignItems: "flex-end"}}>
              <TouchableOpacity onPress={this.onSubmit} style={styles.nav_button}><Text style={[styles.nav_button_text, styles.blue]}>Add</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <TextInput
          style={styles.titleInput}
          placeholder="Enter a title..."
          onChangeText={(text) => this.setState({text})}
          multiline={false}
          autoFocus={true}
          placeholderTextColor="rgba(67,146,241,.25)"
        />
        <View style={{
          height: 1,
          width: width,
          backgroundColor: "rgba(12,27,44,.07)",
          marginBottom: 10,
        }} />
        <TextInput
          style={styles.noteInput}
          placeholder="Enter a note..."
          onChangeText={(note) => this.setState({note})}
          multiline={true}
          autoFocus={false}
          placeholderTextColor="rgba(12,27,44,.15)"
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  bounds: {
    flexDirection: "column",
    height: height,
    width: width,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nav: {
    height: 64,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "#0D1B2C",
    shadowOffset: {width: 0, height: 1 },
    shadowOpacity: .07,
    shadowRadius: 0
  },
  nav_button_cont: {
    flex: 1,
    justifyContent: "center",
  },
  nav_button: {
    padding: 4,
  },
  nav_title: {
    paddingTop: 4,
    color: "#0D1B2C",
    fontSize: 20,
    height: 64,
    fontWeight: "600",
    lineHeight: 64,
  },
  nav_button_text: {
    fontSize: 20,
    fontWeight: "500",
  },
  black: {
    color: "#0D1B2C",
  },
  blue: {
    color: "#4392F1",
  },
  titleInput: {
    width: width,
    padding: 20,
    color: "#4392F1",
    fontSize: 20,
    fontWeight: "600",
  },
  noteInput: {
    flex: 1,
    width: width,
    padding: 20,
    width: width,
    color: "#0D1B2C",
    fontSize: 20,
    fontWeight: "400",
  }
})
