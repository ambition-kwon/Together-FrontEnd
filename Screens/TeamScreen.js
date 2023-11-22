import React, {useContext, useEffect, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import LeaderItem from '../Components/LeaderItem';
import MemberItem from '../Components/MemberItem';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';

function TeamScreen() {
  const navigation = useNavigation();
  const {server, account} = useContext(DataContext);
  const [toggle, setToggle] = useState(false);
  const [leaderRoom, setLeaderRoom] = useState([]);
  const [memberRoom, setMemberRoom] = useState([]);
  async function fetchData() {
    try {
      const response1 = await axios.get(`${server}/team-member/creator`, {
        headers: {
          memberId: account.id,
        },
      });
      setLeaderRoom(response1.data);
      const response2 = await axios.get(`${server}/team-member/member`, {
        headers: {
          memberId: account.id,
        },
      });
      setMemberRoom(response2.data);
      console.log('팀원모집 로딩 성공');
    } catch (error) {
      console.error('팀원모집 로딩 실패:', error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const leaderRender = ({item}) => {
    return (
      <LeaderItem
        joinedNumber={item.joinedNumber}
        capacity={item.capacity}
        content={item.content}
        title={item.title}
        deadline={item.deadline}
        onPress={() => {
          if (item.capacity === item.joinedNumber) {
            navigation.navigate('ShowId', {roomId: item.roomId});
          } else {
            navigation.navigate('Leader', {roomId: item.roomId});
          }
        }}
      />
    );
  };
  const memberRender = ({item}) => {
    return (
      <MemberItem
        status={item.status}
        content={item.content}
        title={item.title}
        city={item.city}
        creator={item.creator}
        createdTime={item.createdTime}
        onPress={null} //TODO : 여기하기!
      />
    );
  };
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
        {/*TODO: 삭제 기능 만들기*/}
        {!toggle ? (
          <>
            <FlatList data={leaderRoom} renderItem={leaderRender} />
          </>
        ) : (
          <>
            <FlatList data={memberRoom} renderItem={memberRender} />
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
