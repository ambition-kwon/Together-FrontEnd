import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IndicatorBar from '../Components/IndicatorBar';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';
import CheckIcon from '../Components/CheckIcon';

function EditKakaoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={19} />
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>
          {'팀원 연락에 사용될\n카카오톡 ID를 재설정 해 주세요'}
        </Text>
      </View>
      <Margin value={120} />
      <TextInput
        style={styles.body}
        placeholder={null}
        value={null}
        onChangeText={null}
        autoComplete={'off'}
        keyboardType={'default'}
        secureTextEntry={false}
        autoCapitalize={'none'}
        autoCorrect={false}
        passwordRules={null}
        autoFocus={true}
      />
      <View style={styles.button}>
        <CheckIcon onPress={null} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  body: {
    fontSize: 32,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 490,
  },
});

export default EditKakaoScreen;
