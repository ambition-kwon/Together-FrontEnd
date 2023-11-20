import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import CheckIcon from '../Components/CheckIcon';
import CustomBoxInput from '../Components/CustomBoxInput';

function EditPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={19} />
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>
          {'사용자의 비밀번호를\n재설정 해 주세요'}
        </Text>
      </View>
      <Margin value={60} />
      <View style={{alignItems: 'center'}}>
        <CustomBoxInput
          placeholder={'현재 비밀번호'}
          value={null}
          onChangeText={null}
          autoComplete={null}
          keyboardType={'default'}
          secureTextEntry={true}
          autoFocus={true}
        />
        <Margin value={20} />
        <CustomBoxInput
          placeholder={'새 비밀번호'}
          value={null}
          onChangeText={null}
          autoComplete={null}
          keyboardType={'default'}
          secureTextEntry={true}
        />
        <Margin value={20} />
        <CustomBoxInput
          placeholder={'새 비밀번호(재확인)'}
          value={null}
          onChangeText={null}
          autoComplete={null}
          keyboardType={'default'}
          secureTextEntry={true}
        />
      </View>
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

export default EditPasswordScreen;
