import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Home from "./home/Home.js";
import Feed from "./feed/Feed.js";
import Calendar from "./calendar/Calendar.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };

    this.changePage = this.changePage.bind(this);
  }

  /**
   * Changes the page of the app
   * @param {String} name The name of the page to change to
   */
  changePage(name) {
    this.setState({ page: name });
  }

  render() {
    switch (this.state.page) {
      case "feed":
        return (
          <View style={styles.app}>
            <Feed changePage={this.changePage} />
          </View>
        );

      case "calendar":
        return (
          <View style={styles.app}>
            <Calendar changePage={this.changePage} />
          </View>
        );

      default:
        return (
          <View style={styles.app}>
            <Home changePage={this.changePage} />
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});

export default App;
