import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Margin from './Margin';

function AnswerItem({question, number, value, onChangeText}) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <Text style={styles.text1}>{question}</Text>
        <View style={styles.subContainer2}>
          <Text style={styles.text2}>{`${number}번 문항`}</Text>
        </View>
      </View>
      <Margin value={16} />
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.subContainer3}
          multiline={true}
          placeholder={'답변을 입력해주세요'}
          value={value}
          onChangeText={onChangeText}
          keyboardType={'default'}
          autoComplete={null}
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 11,
    backgroundColor: 'rgba(255, 245, 240, 1)',
    paddingTop: 9,
    paddingBottom: 16,
    paddingHorizontal: 13,
    justifyContent: 'center',
    marginBottom: 7,
  },
  subContainer1: {flexDirection: 'row', justifyContent: 'space-between'},
  subContainer2: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA450',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  subContainer3: {
    width: '100%',
    fontSize: 14,
    fontWeight: '700',
    borderBottomWidth: 1,
  },
  text1: {fontSize: 14, fontWeight: '700', color: 'black'},
  text2: {fontSize: 11, fontWeight: '700', color: 'white'},
});

export default AnswerItem;
