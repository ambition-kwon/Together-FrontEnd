import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import CheckIcon from '../Components/CheckIcon';
import CustomBoxInput from '../Components/CustomBoxInput';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

function EditPasswordScreen() {
  const [loading, setLoading] = useState(false);
  const {account, server} = useContext(DataContext);
  const navigation = useNavigation();
  const [password, setPassword] = useState({
    beforePassword: '',
    afterPassword: '',
    afterPasswordConfirm: '',
  });
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${server}/my/pw`,
        {
          changePw: password.afterPassword,
        },
        {
          headers: {
            memberId: account.id,
          },
        },
      );
      console.log('비밀번호 변경 완료');
      setLoading(false);
    } catch (error) {
      console.error('비밀번호 변경 오류:', error.message);
      setLoading(false);
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <View style={{marginLeft: 33}}>
          <Text style={styles.header}>
            {'사용자의 비밀번호를\n재설정 해 주세요'}
          </Text>
        </View>
        <Margin value={60} />
        <View style={{alignItems: 'center'}}>
          <CustomBoxInput
            placeholder={'현재 비밀번호'}
            value={password.beforePassword}
            onChangeText={text =>
              setPassword({...password, beforePassword: text})
            }
            autoComplete={null}
            keyboardType={'default'}
            secureTextEntry={true}
            autoFocus={true}
          />
          <Margin value={20} />
          <CustomBoxInput
            placeholder={'새 비밀번호'}
            value={password.afterPassword}
            onChangeText={text =>
              setPassword({...password, afterPassword: text})
            }
            autoComplete={null}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Margin value={20} />
          <CustomBoxInput
            placeholder={'새 비밀번호(재확인)'}
            value={password.afterPasswordConfirm}
            onChangeText={text =>
              setPassword({...password, afterPasswordConfirm: text})
            }
            autoComplete={null}
            keyboardType={'default'}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.button}>
          <CheckIcon
            onPress={() => {
              if (
                account.password !== password.beforePassword ||
                password.afterPassword !== password.afterPasswordConfirm
              ) {
                Alert.alert(
                  '알림',
                  '비밀번호를 재확인해 주세요',
                  [
                    {
                      text: '확인',
                      style: 'default',
                    },
                  ],
                  {cancelable: false},
                );
              } else {
                fetchData().then(() => {
                  navigation.reset({routes: [{name: 'BottomTab'}]});
                  Alert.alert(
                    '알림',
                    '비밀번호 변경이 완료되었습니다.',
                    [
                      {
                        text: '확인',
                        style: 'default',
                      },
                    ],
                    {cancelable: false},
                  );
                });
              }
            }}
          />
        </View>
        {loading ? <LoadingScreen /> : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
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

export default EditPasswordScreen;
