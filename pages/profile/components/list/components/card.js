import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dimensions: 0 }
  }
  render() {
    return(
      <View style={styles.bounds} onLayout={this.onLayout}>
        <View style={styles.dot_outer}><View style={styles.dot_inner} /></View>
        <View style={styles.card}>
          <Text style={styles.card_title}>
            {this.props.title}
          </Text>
          <Text style={styles.card_text}>
            {this.props.text}
          </Text>
          <View style={{alignItems: 'flex-end', flex: 1}}>
            <Text style={styles.card_date}>
              {this.props.date}
            </Text>
          </View>
        </View>
        <View style={[styles.line, {height: this.state.dimensions + 20, display: this.props.last ? "none" : "flex"}]} />
      </View>
    )
  }
  onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let height = event.nativeEvent.layout.height
    this.setState({dimensions: height})
  }
}

const styles = StyleSheet.create({
  bounds: {
    marginLeft: 20,
    marginRight: 30,
    marginTop: 20,
    width: width - 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative",
  },
  line: {
    position: "absolute",
    left: 8,
    zIndex: 1,
    top: 28,
    width: 4,
    backgroundColor: "#4392F1",
  },
  dot_outer: {
    zIndex: 2,
    width: 20,
    height: 20,
    backgroundColor: "#CDE2FA",
    borderRadius: 50,
    marginTop: 20,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  dot_inner: {
    zIndex: 3,
    backgroundColor: "#4392F1",
    width: 12,
    height: 12,
    borderRadius: 50,
  },
  card: {
    borderRadius: 10,
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#0D1B2C",
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: .07,
    shadowRadius: 5,
    // maxHeight: 200,
  },
  card_title: {
    color: "#4392F1",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    flexWrap: "wrap",
  },
  card_text: {
    color: "#0D1B2C",
    fontSize: 16,
    fontWeight: "400",
    flexWrap: "wrap",
  },
  card_date: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "400",
    flexWrap: "wrap",
    color: "#CDE2FA",
    fontStyle: 'italic',
  }
})
