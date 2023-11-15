import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import RoomItem from '../Components/RoomItem';

function TeamScreen() {
  const [toggle, setToggle] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
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
      <RoomItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {flexDirection: 'row'},
  toggleText1: {fontSize: 21, fontWeight: '700', color: 'black'},
  toggleText2: {
    fontSize: 21,
    fontWeight: '700',
    color: 'rgba(148, 163, 184, 1)',
  },
});

export default TeamScreen;
