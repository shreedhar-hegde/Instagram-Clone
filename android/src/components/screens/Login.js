import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

class Login extends Component {

    loginHandle() {
       this.props.navigation.navigate("register")
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
        <Text>Login</Text>
      </TouchableOpacity>
    );
  }
}


export default Login