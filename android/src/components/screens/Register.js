import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

class Register extends Component {

    registerHandle() {
       this.props.navigation.navigate("main")
    }
    
  render() {
    return (
      <View
        style={{
          height: 100 + "%",
          width: 100 + "%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        onPress={() => this.registerHandle()}
      >
        <Text>Register</Text>
      </View>
    );
  }
}


export default Register