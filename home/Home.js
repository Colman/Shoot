import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  CameraRoll
} from "react-native";
import { RNCamera } from "react-native-camera";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flash: false,
      back: false,
      pressed: false
    };
  }

  capture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, forceUpOrientation: true }; //base64 true doNotSave
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.saveToCameraRoll(data.uri, "photo");
    }
  };

  render() {
    return (
      <RNCamera
        ref={cam => {
          this.camera = cam;
        }}
        style={styles.camera}
        flashMode={
          this.state.flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        type={
          this.state.back
            ? RNCamera.Constants.Type.back
            : RNCamera.Constants.Type.front
        }
        permissionDialogTitle={"Permission to use camera"}
        permissionDialogMessage={"Shoot would like to use your camera"}
      >
        <TouchableOpacity
          style={[styles.button, styles.flashButton]}
          onPress={() => this.setState({ flash: !this.state.flash })}
        >
          <Image
            source={
              this.state.flash
                ? require("./flash2.png")
                : require("./flash.png")
            }
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.logoButton]}
          onPress={() => {
            this.props.changePage("feed");
          }}
        >
          <Image
            source={require("../artwork/logo-d.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.switchButton]}
          onPress={() => this.setState({ back: !this.state.back })}
        >
          <Image source={require("./switch.png")} style={styles.buttonImage} />
        </TouchableOpacity>

        <View style={[styles.button, styles.captureButton]}>
          <TouchableWithoutFeedback
            onPress={this.capture.bind(this)}
            onPressIn={() => {
              this.setState({ pressed: true });
            }}
            onPressOut={() => {
              this.setState({ pressed: false });
            }}
          >
            <Image
              source={
                this.state.pressed
                  ? require("./capture2.png")
                  : require("./capture.png")
              }
              style={styles.buttonImage}
            />
          </TouchableWithoutFeedback>
        </View>
      </RNCamera>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  camera: {
    position: "relative",
    alignItems: "center",
    flex: 1
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50
  },
  buttonImage: {
    width: "100%",
    height: "100%"
  },
  flashButton: {
    top: 20,
    left: 25
  },
  logoButton: {
    top: 20
  },
  switchButton: {
    top: 20,
    right: 25
  },
  captureButton: {
    width: 85,
    height: 85,
    bottom: 35
  }
});
