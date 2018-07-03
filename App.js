import React from "react";
import { StyleSheet, ListView, Text } from "react-native";

import ColorButton from "./components/ColorButton";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    padding: 18,
    paddingTop: 36
  }
});

export default class App extends React.Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const availableColors = ["red", "green", "yellow", "blue"];

    this.state = {
      backgroundColor: "blue",
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor, dataSource } = this.state;
    return (
      <ListView
        style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={color => (
          <ColorButton backgroundColor={color} onSelect={this.changeColor} />
        )}
        renderHeader={() => <Text style={styles.header}>Color List</Text>}
      />
    );
  }
}
