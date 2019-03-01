import React from 'react';
import { View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';
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
    this.refs['title_input'].blur()
    this.refs['note_input'].blur()
    this.props.onClose()
  }
  onSubmit() {
    this.refs['title_input'].blur()
    this.refs['note_input'].blur()
    this.props.onClose()
  }
  render() {
    return(
      <SafeAreaView style={styles.bounds}>
        <View style={styles.nav}>
          <View style={{alignItems: "flex-start", flex: 1}}>
            <TouchableOpacity onPress={this.onCancel.bind(this)} style={[styles.nav_button, styles.black]}><Text style={styles.nav_button_text}>Cancel</Text></TouchableOpacity>
          </View>
          <Text style={styles.nav_title}>New Note</Text>
          <View style={{alignItems: "flex-end", flex: 1}}>
            <TouchableOpacity onPress={this.onSubmit.bind(this)} style={styles.nav_button}><Text style={[styles.nav_button_text, styles.blue]}>Add</Text></TouchableOpacity>
          </View>
        </View>
        <View style={{
          height: 1,
          width: width-40,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "rgba(12,27,44,.07)",
          // marginBottom: 10,
        }} />
        <TextInput
          style={styles.titleInput}
          ref="title_input"
          placeholder="Enter a title..."
          onChangeText={(text) => this.setState({text})}
          multiline={false}
          placeholderTextColor="rgba(67,146,241,.25)"
        />
        <View style={{
          height: 1,
          width: width-40,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: "rgba(12,27,44,.07)",
          marginBottom: 10,
        }} />
        <TextInput
          style={styles.noteInput}
          ref="note_input"
          placeholder="Enter a note..."
          onChangeText={(note) => this.setState({note})}
          multiline={true}
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
    paddingLeft: 16,
    paddingRight: 16,
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
