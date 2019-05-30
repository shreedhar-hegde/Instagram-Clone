import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "../../config";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get("window").width
    };

  }

  likeHandle() {
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const heartIconColor = this.state.liked ? "rgb(252, 61, 57)" : null;

    return (
      <View style={{flex:1, width: 100+"%"}}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.profilePic}
              source={{ uri: "https://source.unsplash.com/user/erondu/40x40" }}
            />
            <Text style={{ marginLeft: 10 }}>User123</Text>
            <View
              style={{
                alignItems: "center",
                paddingLeft: 200, 
                marginBottom: 20
              }}
            >
              <Text style={{ fontSize: 30 }}>...</Text>
            </View>
          </View>

            
        </View>

        <TouchableOpacity onPress={() => this.likeHandle()}>
          <Image
            style={{ width: this.state.screenWidth, height: 325 }}
            source={{
              uri: `https://picsum.photos/${this.state.screenWidth}`
            }}
          />
        </TouchableOpacity>

        <View style={styles.iconBar}>
          <Image
            style={[
              styles.icon,
              { height: 40, width: 40, tintColor: heartIconColor }
            ]}
            source={config.images.heartIcon}
          />
          <Image
            style={[styles.icon, { height: 36, width: 36 }]}
            source={config.images.chatIcon}
          />
          <Image
            style={[styles.icon, { height: 45, width: 40}]}
            source={config.images.arrowIcon}
          />
        </View>

        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { height: 30, width: 30}]}
            source={config.images.heartIcon}
          />
          <Text>100 likes</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255, 255, 255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },

  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderBottomColor: "rgb(233, 233, 233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginLeft: 5,
  }
});

export default Post;
