import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

class Profile extends Component {

    loginHandle() {
       this.props.navigation.navigate("")
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
        <Text>profile</Text>
      </TouchableOpacity>
    );
  }
}


export default Profile