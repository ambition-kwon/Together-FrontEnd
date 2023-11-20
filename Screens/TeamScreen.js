import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import LeaderItem from '../Components/LeaderItem';
import MemberItem from '../Components/MemberItem';
import {useFocusEffect} from '@react-navigation/native';

function TeamScreen() {
  const [toggle, setToggle] = useState(false);
  useFocusEffect(() => {
    console.log('3번 스크린');
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MainHeader />
      <Margin value={11} />
      <View style={styles.toggleContainer}>
        <View style={{width: 13}} />
        <TouchableOpacity activeOpacity={0.3} onPress={() => setToggle(false)}>
          <Text style={!toggle ? styles.toggleText1 : styles.toggleText2}>
            팀장
          </Text>
        </TouchableOpacity>
        <View style={{width: 9}} />
        <TouchableOpacity activeOpacity={0.3} onPress={() => setToggle(true)}>
          <Text style={toggle ? styles.toggleText1 : styles.toggleText2}>
            팀원
          </Text>
        </TouchableOpacity>
      </View>
      <Margin value={19} />
      <View style={styles.subContainer}>
        {!toggle ? (
          <>
            {/*TODO: 삭제 기능 만들기(1)*/}
            <LeaderItem />
            <LeaderItem />
            <LeaderItem />
          </>
        ) : (
          <>
            {/*TODO: 삭제 기능 만들기(2)*/}
            <MemberItem cases={'waiting'} />
            <MemberItem cases={'pass'} />
            <MemberItem cases={'fail'} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {flexDirection: 'row'},
  subContainer: {flex: 1, marginHorizontal: 13},
  toggleText1: {fontSize: 21, fontWeight: '700', color: 'black'},
  toggleText2: {
    fontSize: 21,
    fontWeight: '700',
    color: 'rgba(148, 163, 184, 1)',
  },
});

export default TeamScreen;
