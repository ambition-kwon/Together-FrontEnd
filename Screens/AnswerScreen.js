import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnswerItem from '../Components/AnswerItem';
import Margin from '../Components/Margin';
import CheckIcon from '../Components/CheckIcon';

function AnswerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'설문에 대한\n답변을 진행해주세요'}</Text>
      </View>
      <Margin value={24} />
      <View style={styles.subContainer}>
        <AnswerItem
          question={'귀하의 성함은 어떻게 되시나요?'}
          number={1}
          value={null}
          onChangeText={null}
        />
        <AnswerItem
          question={'대학교는 어디 / 무슨 학과에 재학중이신가요?'}
          number={2}
          value={null}
          onChangeText={null}
        />
      </View>
      <View style={styles.icon}>
        <CheckIcon />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {flex: 1, marginHorizontal: 13},
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF792D',
  },
  icon: {position: 'absolute', right: 13, bottom: 30},
});

export default AnswerScreen;
