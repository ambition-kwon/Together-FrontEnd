import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import ShowAnswerItem from '../Components/ShowAnswerItem';

function ShowAnswerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={54} />
      <View style={styles.subContainer}>
        <ShowAnswerItem
          number={1}
          question={'귀하의 성함은 어떻게 되시나요?'}
          answer={'권혁원'}
        />
        <ShowAnswerItem
          number={2}
          question={'정확한 거주지를 입력해주세요!'}
          answer={'고양시 일산동구'}
        />
        <ShowAnswerItem
          number={3}
          question={'대학교는 어디 / 무슨학과에 재학중이신가요?'}
          answer={'제주대학교 / 컴퓨터공학전공'}
        />
      </View>
      <View style={styles.iconContainer}>
        <FailIcon />
        <PassIcon />
      </View>
    </SafeAreaView>
  );
}

function FailIcon() {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={null}
      style={styles.failIcon}>
      <Text style={styles.iconText}>FAIL</Text>
    </TouchableOpacity>
  );
}

function PassIcon() {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={null}
      style={styles.passIcon}>
      <Text style={styles.iconText}>PASS</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {flex: 1, marginHorizontal: 13},
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    flex: 0.1,
  },
  failIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(24, 192, 122, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {fontSize: 16, fontWeight: '700', color: 'white'},
});

export default ShowAnswerScreen;
