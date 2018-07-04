import React from "react";
import { StyleSheet, ListView, AsyncStorage } from "react-native";

import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";

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

    const availableColors = [];

    this.state = {
      backgroundColor: "blue",
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    };
    this.changeColor = this.changeColor.bind(this);
    this.newColor = this.newColor.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem("@ColorListStore:Colors", (err, data) => {
      if (err) {
        console.error("Error loading colors", err);
      } else {
        const availableColors = JSON.parse(data);
        this.setState({
          availableColors,
          dataSource: this.ds.cloneWithRows(availableColors)
        });
      }
    });
  }

  saveColors(colors) {
    AsyncStorage.setItem("@ColorListStore:Colors", JSON.stringify(colors));
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  newColor(color) {
    const availableColors = [...this.state.availableColors, color];
    this.setState({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    });
    this.saveColors(availableColors);
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
        renderHeader={() => <ColorForm onNewColor={this.newColor} />}
      />
    );
  }
}
