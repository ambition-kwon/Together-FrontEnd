import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';

function CreateRoomScreen1() {
  const [headCount, setHeadCount] = useState('');
  const handleHeadCount = text => {
    if (/^0/.test(text)) {
      return;
    }
    setHeadCount(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'몇 명의 팀원을\n구하실 건가요?'}</Text>
      </View>
      <Margin value={120} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/*TODO: 이거 String형이니까 보낼 때 number형으로 변환 후 보내기*/}
        <TextInput
          style={styles.body}
          placeholder={null}
          value={headCount}
          onChangeText={handleHeadCount}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
          autoCapitalize={'none'}
          autoCorrect={false}
          passwordRules={null}
          autoFocus={true}
        />
        <Text style={styles.body}>명</Text>
      </View>
      <View style={styles.button}>
        <NextIcon onPress={null} />
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
    color: '#FF792D',
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

export default CreateRoomScreen1;
