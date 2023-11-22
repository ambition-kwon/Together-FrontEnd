import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function RoomItem({
  joinedNumber,
  creator,
  createdDay,
  title,
  content,
  capacity,
  city,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2} numberOfLines={4}>
        {content}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={styles.text3}>{`${creator} / ${city} / ${createdDay}`}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'groups'} size={12} color={'black'} />
          <Text style={styles.text4}>{`${joinedNumber} / ${capacity}명`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderRadius: 11,
    backgroundColor: '#FFF5F0',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal: 13,
    marginVertical: 3.5,
  },
  text1: {fontSize: 13, fontWeight: '700'},
  text2: {fontSize: 10, fontWeight: '500'},
  text3: {fontSize: 9, fontWeight: '700', color: 'rgba(255, 121, 45, 1)'},
  text4: {fontSize: 9, fontWeight: '700', marginLeft: 2},
});

export default RoomItem;
