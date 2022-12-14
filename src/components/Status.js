import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Screen = Dimensions.get('window');
const AVATAR_SIZE = Screen.width * 0.15;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
  },
  rowIndented: {
    marginLeft: 30,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 10,
  },
  right: {
    flex: 1,
  },
  header: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  headerVer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222222',
  },
  textUsername: {
    fontSize: 15,
    marginLeft: 10,
    color: '#4f5153',
  },
  textVerifed: {
    width: 16,
    height: 16,
    marginLeft: 5,
    // backgroundColor: '#0062ff',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 40,
  },
  textStatus: {
    fontSize: 15,
    color: '#4f5153',
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heart: {
    width: 20,
    height: 20,
    tintColor: '#6e7f8d',
  },
  heartFilled: {
    tintColor: '#df245e',
  },
  textDate: {
    color: '#6e7f8d',
    fontSize: 14,
  },
});

export const Status = ({
  user,
  status,
  isLiked,
  onRowPress,
  onHeartPress,
  publishedAt,
  indent,
}) => (
  <TouchableOpacity onPress={onRowPress}>
    <View style={[styles.row, indent && styles.rowIndented]}>
      <View>
        <Image source={{uri: user.avatarUri}} style={styles.avatar} />
      </View>
      <View style={styles.right}>
        <View style={styles.header}>
          <View style={styles.headerVer}>
            <Text style={styles.textName}>{user.name}</Text>
            {user.verified && <Image style={styles.textVerifed} source={require('../assets/icons/verified.png')}/>}
          </View>
          <Text style={styles.textUsername}>{user.username}</Text>
        </View>
        <Text style={styles.textStatus}>{status}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={onHeartPress}>
            {isLiked ? (
              <Image
                style={[styles.heart, styles.heartFilled]}
                source={require('../assets/icons/heart.png')}
              />
            ) : (
              <Image
                style={styles.heart}
                source={require('../assets/icons/heart-border.png')}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.textDate}>
            {formatDistanceToNow(new Date(publishedAt), {addSuffix: true})}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export const Separator = () => (
  <View style={{height: 1, flex: 1, backgroundColor: '#e6ecf0'}} />
);
