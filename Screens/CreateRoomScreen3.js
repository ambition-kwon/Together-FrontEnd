import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';

function CreateRoomScreen3() {
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'팀원을 구할\n방을 소개해주세요'}</Text>
      </View>
      <Margin value={120} />
      <TextInput
        style={styles.body1}
        placeholder={'방 제목'}
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
      <Text style={{textAlign: 'center'}}>
        -----------------------------------------------
      </Text>
      <TextInput
        style={styles.body2}
        placeholder={'방 내용'}
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
        <NextIcon onPress={null} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF792D',
  },
  body1: {
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  body2: {
    fontSize: 16,
    fontWeight: '400',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'auto',
    paddingHorizontal: 40,
    paddingTop: 10,
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 490,
  },
});

export default CreateRoomScreen3;
