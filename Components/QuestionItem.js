import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function QuestionItem({number, onPress, value, onChangeText}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.subContainer1}
        multiline={true}
        placeholder={'질문을 입력해주세요'}
        value={value}
        onChangeText={onChangeText}
        keyboardType={'default'}
        autoComplete={null}
        autoCorrect={false}
      />
      <TouchableOpacity
        style={styles.subContainer2}
        activeOpacity={0.3}
        onPress={onPress}>
        <Text style={styles.text1}>{`${number}번 문항`}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFF5F0',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginVertical: 3.5,
  },
  subContainer1: {
    width: '80%',
    fontSize: 14,
    fontWeight: '700',
  },
  subContainer2: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA450',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  text1: {fontSize: 11, fontWeight: '700', color: 'white'},
});

export default QuestionItem;
