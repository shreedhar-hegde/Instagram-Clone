import React, { Component } from "react";
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import { MainFeed, Login, Camera, Profile, Register } from "./components/screens";


const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile
})

const IntroStack = createStackNavigator({
  register: Register,

  login:Login,
})

const MainStack = createStackNavigator({
  intro: {screen:IntroStack},
  Main: {screen:Tabs}
})



const Stack = createAppContainer(MainStack)

class InstaClone extends Component {
  render() {
    return <Stack screenProps={MainStack} />;
  }
}

export default InstaClone

