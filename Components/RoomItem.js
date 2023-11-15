import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function RoomItem() {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={null}
      style={styles.container}>
      <Text style={styles.text1}>제주시 거주하시는 팀원 구합니다.</Text>
      <Text style={styles.text2} numberOfLines={4}>
        저는 언론홍보학과이고, 제주시에서 거주하시는 대학생 팀원 구해봅니다.
        실력은 상관없고 하려는 의지만 있다면 OK입니다~~ 부담없이 지원해주세요!!
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.text3}>홍보맨123 / 제주시 / 13시간전</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon name={'groups'} size={12} color={'black'} />
          <Text style={styles.text4}>3/3명</Text>
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
