import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Margin from './Margin';

function LeaderItem() {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={null}
      style={styles.container}>
      <Text style={styles.text1}>
        2022 고용노동부 일생활균형 홍보 포스터 공모전
      </Text>
      <Text style={styles.text2} numberOfLines={3}>
        제주시 거주하시는 팀원 우선적으로 구합니다.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={styles.d_day_container}>
          <Text style={styles.d_day_text}>D-23</Text>
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
  d_day_container: {
    height: 17,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 121, 45, 1)',
    paddingHorizontal: 8,
  },
  d_day_text: {fontSize: 11, fontWeight: '700', color: 'white'},
  text1: {fontSize: 13, fontWeight: '700'},
  text2: {fontSize: 10, fontWeight: '500'},
  text3: {fontSize: 9, fontWeight: '700', color: 'rgba(255, 121, 45, 1)'},
  text4: {fontSize: 9, fontWeight: '700', marginLeft: 2},
});

export default LeaderItem;
