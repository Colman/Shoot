import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableHighlight,
  View,
  Text
} from "react-native";
import ScalableImage from "react-native-scalable-image";

class Toolbar extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <TouchableHighlight
          style={styles.calendarHighlight}
          onPress={() => {
            this.props.changePage("calendar");
          }}
        >
          <Image
            source={require("./calendar.png")}
            resizeMode="contain"
            style={styles.calendar}
          />
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.logoHighlight}
          onPress={() => {
            this.props.changePage("home");
          }}
        >
          <Image
            source={require("../artwork/logo-d.png")}
            resizeMode="contain"
            style={styles.logo}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

class Feed extends Component {
  getFeedData() {
    return [
      {
        name: "Colman",
        date: "2 seconds ago",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
      },
      {
        name: "Mark",
        date: "29 minutes ago",
        image: "https://i.ytimg.com/vi/xNN7iTA57jM/maxresdefault.jpg"
      },
      {
        name: "Joel",
        date: "4 hours ago",
        image:
          "https://www.worldatlas.com/r/w728-h425-c728x425/upload/66/14/d8/kangchenjunga.jpg"
      }
    ];
  }

  renderItem(item) {
    return (
      <View>
        <View style={entryStyles.header}>
          <Text style={entryStyles.name}>{item.item.name}</Text>
          <View style={entryStyles.headerSpace} />
          <Text style={entryStyles.date}>{item.item.date}</Text>
        </View>

        <ScalableImage
          source={{
            uri: item.item.image
          }}
          width={Dimensions.get("window").width}
        />

        <View style={entryStyles.footer}>
          <Image
            style={[entryStyles.icon, entryStyles.iconLeft]}
            source={require("./download.png")}
          />
          <View style={entryStyles.footerSpace} />
          <Image style={entryStyles.icon} source={require("./twitter.png")} />
          <Image style={entryStyles.icon} source={require("./facebook.png")} />
          <Image style={entryStyles.icon} source={require("./instagram.png")} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.feed}>
        <Toolbar changePage={this.props.changePage} />
        <FlatList
          style={styles.list}
          data={this.getFeedData()}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    display: "flex"
  },
  toolbar: {
    height: 60,
    backgroundColor: "#333333",
    borderColor: "#FFF",
    borderBottomWidth: 1,
    position: "relative",
    alignItems: "center"
  },
  calendarHighlight: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 15,
    left: 15
  },
  calendar: {
    width: "100%",
    height: "100%",
    tintColor: "#BBB"
  },
  logoHighlight: {
    width: 50,
    height: 40,
    position: "absolute",
    top: 10
  },
  logo: {
    width: "100%",
    height: "100%"
  },
  list: {
    flex: 1
  }
});

const entryStyles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#F2F2F2"
  },
  name: {
    marginLeft: 20,
    color: "black",
    fontWeight: "bold",
    fontSize: 17
  },
  headerSpace: {
    flex: 1
  },
  date: {
    marginRight: 12,
    marginTop: 5,
    color: "black"
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 35
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 25
  },
  iconLeft: {
    marginRight: 0,
    marginLeft: 25
  },
  footerSpace: {
    flex: 1
  }
});
