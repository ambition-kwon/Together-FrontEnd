import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import CheckIcon from '../Components/CheckIcon';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';

function EditKakaoScreen() {
  const [kakaoId, setKakaoId] = useState('');
  const navigation = useNavigation();
  const {server, account} = useContext(DataContext);
  async function fetchData() {
    try {
      const response = await axios.post(
        `${server}/my/kakaotalkId`,
        {kakaotalkId: kakaoId},
        {
          headers: {
            memberId: account.id,
          },
        },
      );
      console.log('KAKAO ID 변경 성공');
    } catch (error) {
      console.error('KAKAO ID 변경 실패:', error.message);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>
          {'팀원 연락에 사용될\n카카오톡 ID를 재설정 해 주세요'}
        </Text>
      </View>
      <Margin value={120} />
      <TextInput
        style={styles.body}
        placeholder={null}
        value={kakaoId}
        onChangeText={setKakaoId}
        autoComplete={'off'}
        keyboardType={'default'}
        secureTextEntry={false}
        autoCapitalize={'none'}
        autoCorrect={false}
        passwordRules={null}
        autoFocus={true}
      />
      <View style={styles.button}>
        <CheckIcon
          onPress={() => {
            if (kakaoId !== '') {
              fetchData().then(() => {
                navigation.reset({routes: [{name: 'BottomTab'}]});
              });
            }
          }}
        />
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
    top: 400,
  },
});

export default EditKakaoScreen;
