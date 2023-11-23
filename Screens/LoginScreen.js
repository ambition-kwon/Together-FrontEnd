import React, {useContext, useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomBoxInput from '../Components/CustomBoxInput';
import Margin from '../Components/Margin';
import CustomBoxButton from '../Components/CustomBoxButton';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../Contexts/DataContext';
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [change, setChange] = useState(false);
  const {server, account, setAccount} = useContext(DataContext);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.post(`${server}/login`, {
        id: account.id,
        password: account.password,
      });
      navigation.reset({routes: [{name: 'BottomTab'}]});
      console.log('로그인 성공:', JSON.stringify(account, null, 2));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Alert.alert(
        '알림',
        '아이디/비밀번호를 재 확인 해주세요',
        [
          {
            text: '확인',
            style: 'default',
            onPress: () => {},
          },
        ],
        {cancelable: true},
      );
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <View style={styles.container}>
            <Margin value={20} />
            <Image
              source={require('../Images/mainicon.png')}
              style={styles.image}
            />
            <Text style={styles.maintext}>Together</Text>
            <Margin value={42} />
            <CustomBoxInput
              placeholder={'아이디'}
              value={account.id}
              onChangeText={text => setAccount({...account, id: text})}
              autoComplete={null}
              keyboardType={'default'}
              secureTextEntry={false}
            />
            <Margin value={10} />
            <CustomBoxInput
              placeholder={'비밀번호'}
              value={account.password}
              onChangeText={text => setAccount({...account, password: text})}
              autoComplete={null}
              keyboardType={'default'}
              secureTextEntry={true}
            />
            {change && (
              <>
                <Margin value={10} />
                <CustomBoxInput
                  placeholder={'비밀번호 재확인'}
                  value={account.passwordConfirm}
                  onChangeText={text =>
                    setAccount({...account, passwordConfirm: text})
                  }
                  autoComplete={null}
                  keyboardType={'default'}
                  secureTextEntry={true}
                />
              </>
            )}
            <Margin value={51} />
            {change ? (
              <>
                <CustomBoxButton
                  value={'회원가입'}
                  swap={true}
                  onPress={() => {
                    if (account.password !== account.passwordConfirm) {
                      Alert.alert(
                        '알림',
                        '비밀번호를 재 확인 해주세요',
                        [
                          {
                            text: '확인',
                            style: 'default',
                            onPress: () => {},
                          },
                        ],
                        {cancelable: true},
                      );
                    } else {
                      navigation.navigate('Register1');
                    }
                  }}
                />
                <Margin value={10} />
                <CustomBoxButton
                  value={'로그인'}
                  swap={false}
                  onPress={() => setChange(false)}
                />
              </>
            ) : (
              <>
                <CustomBoxButton
                  value={'로그인'}
                  swap={true}
                  onPress={fetchData}
                />
                <Margin value={10} />
                <CustomBoxButton
                  value={'회원가입'}
                  swap={false}
                  onPress={() => setChange(true)}
                />
              </>
            )}
            <Margin value={30} />
          </View>
        </KeyboardAvoidingView>
        {loading ? <LoadingScreen /> : null}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maintext: {
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: 6,
  },
  image: {width: 320, height: 320},
});

export default LoginScreen;
