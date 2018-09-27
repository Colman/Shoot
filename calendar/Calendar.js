import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  CameraRoll
} from "react-native";
import { CalendarList } from "react-native-calendars";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popup: true
    };
  }

  getPopUp() {
    if (this.state.popup) {
      return <View style={styles.popup} />;
    }
  }

  render() {
    return (
      <View style={styles.calendar}>
        <CalendarList />

        {this.getPopUp()}
      </View>
    );
  }
}

export default Calendar;

const styles = StyleSheet.create({
  calendar: {
    position: "relative"
  },
  popup: {
    position: "absolute",
    width: "80%",
    height: "80%",
    top: "10%",
    left: "10%",
    backgroundColor: "#222",
    opacity: 0.6,
    borderRadius: 15
  }
});
