import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Helvetica",
    color: "#f9f9f9",
    padding: 36
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: "white"
  },
  text: {
    fontSize: 30,
    margin: 5
  }
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "blue"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <View style={styles.row}>
          <View style={styles.sample} />
          <Text style={styles.text}>Yellow</Text>
        </View>
      </View>
    );
  }
}
