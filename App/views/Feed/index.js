import React from 'react';
import {FlatList, View} from 'react-native';

import {Status, Separator} from '../../components/Status';

import Data from '../status.json';

const Feed = ({navigation: {navigate}}) => {
  const random = (min, max) =>
    Number.parseInt(Math.random() * (max - min) + min);

  const likePost = post => {
    let likes = [];
    likes.push({
      _id: 'lk_' + random(100, 1000),
      liker: Data.users[random(0, 2)]._id,
      postId: post._id,
    });
    Data.likes.push({
      _id: 'lk_' + random(100, 1000),
      liker: Data.users[random(0, 2)]._id,
      postId: post._id,
    });
  };

  const isLiked = post => {
    let liked = false;
    Data.likes.map(like => {
      if (post._id === like.postId) {
        liked = true;
      }
    });
    return liked;
  };

  const findUser = userID =>
    Data.users.find(user => {
      return user._id === userID;
    });

  return (
    <FlatList
      data={Data.feed}
      renderItem={({item}) => (
        <Status
          {...item}
          user={findUser(item.userId)}
          onRowPress={() => navigate('Thread', {originalStatus: item})}
          onHeartPress={() => likePost(item)}
          isLiked={isLiked(item)}
        />
      )}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item._id}
      ListFooterComponent={<View style={{flex: 1, marginBottom: 60}} />}
    />
  );
};

export default Feed;
