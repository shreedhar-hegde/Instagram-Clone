import React, { Component } from "react";
import { Post } from "../presentation";
import { FlatList } from "react-native";

class PostFeed extends Component {

    _keyExtractor = (item) => (item.toString())

    _renderItem = ({item}) => (
        <Post  item={item} />
    )

  render() {
    return (
      <FlatList
        data={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ]}
        keyExtractor = {this.keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default PostFeed;
