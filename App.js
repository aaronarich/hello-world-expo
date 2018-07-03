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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#f9f9f9"
  },
  button: {
    fontSize: 30,
    color: "#f9f9f9",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    alignSelf: "stretch",
    textAlign: "center"
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
        <Text style={styles.button} onPress={() => this.changeColor("green")}>
          Green
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor("red")}>
          Red
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor("blue")}>
          Blue
        </Text>
        <Text style={styles.button} onPress={() => this.changeColor("yellow")}>
          Yellow
        </Text>
      </View>
    );
  }
}
