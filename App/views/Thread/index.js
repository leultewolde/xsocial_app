import React from 'react';
import {FlatList, View} from 'react-native';

import {Status, Separator} from '../../components/Status';
import {Button} from '../../components/Button';

import Data from '../status.json';

const Thread = ({route, navigation}) => {
  // const originalStatus = navigation.getParam('status', {});
  const {originalStatus} = route.params;

  return (
    <FlatList
      data={[originalStatus]}
      renderItem={({item}) => (
        <Status
          {...item}
          user={Data.users}
          onHeartPress={() => alert('todo!')}
          indent={item._id !== originalStatus._id}
        />
      )}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item._id}
      ListFooterComponent={
        <View
          style={{
            flex: 1,
            marginBottom: 60,
            marginHorizontal: 30,
            marginTop: 10,
          }}>
          <Button
            text="New Reply"
            onPress={() =>
              navigation.navigate('New Status', {parent: originalStatus})
            }
          />
        </View>
      }
    />
  );
};

export default Thread;
