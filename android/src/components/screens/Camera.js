import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

class Camera extends Component {

    loginHandle() {
       this.props.navigation.navigate("Main")
    }
    
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => this.loginHandle()}
      >
        <Text>Camera</Text>
      </TouchableOpacity>
    );
  }
}


export default Camera