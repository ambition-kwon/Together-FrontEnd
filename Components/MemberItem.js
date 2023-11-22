import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function MemberItem({
  creator,
  city,
  createdTime,
  title,
  content,
  roomId,
  status,
  onPress,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text1} numberOfLines={1}>
        {title}
      </Text>
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
            style={
              styles.text3
            }>{`${creator} / ${city} / ${createdTime}`}</Text>
        </View>
        {status === 'WAITING' ? (
          <Text style={styles.waiting}>Waiting</Text>
        ) : status === 'PASS' ? (
          <Text style={styles.pass}>PASS</Text>
        ) : status === 'FAIL' ? (
          <Text style={styles.fail}>FAIL</Text>
        ) : undefined}
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
  waiting: {fontSize: 14, fontWeight: '700', color: 'black'},
  pass: {fontSize: 14, fontWeight: '700', color: 'blue'},
  fail: {fontSize: 14, fontWeight: '700', color: 'red'},
});

export default MemberItem;
