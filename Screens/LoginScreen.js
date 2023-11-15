import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomBoxInput from '../Components/CustomBoxInput';
import Margin from '../Components/Margin';
import CustomBoxButton from '../Components/CustomBoxButton';

function LoginScreen() {
  const [change, setChange] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
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
            value={null}
            onChangeText={null}
            autoComplete={null}
            keyboardType={'default'}
            secureTextEntry={false}
          />
          <Margin value={10} />
          <CustomBoxInput
            placeholder={'비밀번호'}
            value={null}
            onChangeText={null}
            autoComplete={null}
            keyboardType={'default'}
            secureTextEntry={false}
          />
          {change && (
            <>
              <Margin value={10} />
              <CustomBoxInput
                placeholder={'비밀번호 재확인'}
                value={null}
                onChangeText={null}
                autoComplete={null}
                keyboardType={'default'}
                secureTextEntry={false}
              />
            </>
          )}
          <Margin value={51} />
          {change ? (
            <>
              <CustomBoxButton value={'회원가입'} swap={true} onPress={null} />
              <Margin value={10} />
              <CustomBoxButton
                value={'로그인'}
                swap={false}
                onPress={() => setChange(false)}
              />
            </>
          ) : (
            <>
              <CustomBoxButton value={'로그인'} swap={true} onPress={null} />
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
    </SafeAreaView>
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
