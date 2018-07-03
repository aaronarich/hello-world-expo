import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ColorButton from "./components/ColorButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48
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
      <ScrollView style={[styles.container, { backgroundColor }]}>
        <ColorButton backgroundColor="red" onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="green" onSelect={this.changeColor} />
        <ColorButton backgroundColor="yellow" onSelect={this.changeColor} />
        <ColorButton backgroundColor="red" onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="green" onSelect={this.changeColor} />
        <ColorButton backgroundColor="yellow" onSelect={this.changeColor} />
        <ColorButton backgroundColor="red" onSelect={this.changeColor} />
        <ColorButton backgroundColor="blue" onSelect={this.changeColor} />
        <ColorButton backgroundColor="green" onSelect={this.changeColor} />
        <ColorButton backgroundColor="yellow" onSelect={this.changeColor} />
      </ScrollView>
    );
  }
}
