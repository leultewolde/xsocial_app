import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    alignItems: 'center',
    textAlignVertical: 'top',
    color: '#000',
  },
});

export const NewStatusInput = ({...props}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholderTextColor="#808080"
      multiline
      numberOfLines={6}
      {...props}
    />
  </View>
);
