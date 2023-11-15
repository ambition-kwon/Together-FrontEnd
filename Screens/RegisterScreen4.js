import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';

function RegisterScreen4() {
  const [remainingTime, setRemainingTime] = useState(3);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    if (remainingTime === 0) {
      //TODO: 0초일 경우 실행할 함수 넣기
    }
  }, [remainingTime]);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../Images/Successmark.png')} />
      <Margin value={36} />
      <Text style={styles.text1}>회원가입이 완료되었습니다</Text>
      <Margin value={10} />
      <Text
        style={
          styles.text2
        }>{`${remainingTime}초후에 자동으로 페이지가 닫힙니다`}</Text>
      <Margin value={60} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text1: {fontSize: 26, fontWeight: '700'},
  text2: {fontSize: 15, fontWeight: '500', color: 'rgba(0, 0, 0, 0.40)'},
});

export default RegisterScreen4;
