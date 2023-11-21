import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import IndicatorBar from '../Components/IndicatorBar';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';
import RegisterTag from '../Components/RegisterTag';
import {useNavigation} from '@react-navigation/native';
import DataContext from '../Contexts/DataContext';
import axios from 'axios';

function RegisterScreen3() {
  const navigation = useNavigation();
  const {server, account, setAccount} = useContext(DataContext);
  const [toggleList, setToggleList] = useState({
    '기획/아이디어': false,
    '논문/리포트': false,
    '광고/마케팅': false,
    '영상/UCC/사진': false,
    '디자인/캐릭터/웹툰': false,
    '웹/모바일/IT': false,
    '게임/소프트웨어': false,
    '과학/공학': false,
    '문학/글/시나리오': false,
    '건축/건설/인테리어': false,
    '네이밍/슬로건': false,
    '예체능/미술/음악': false,
    '대외활동/서포터즈': false,
    봉사활동: false,
    '취업/창업': false,
    해외: false,
    기타: false,
  });
  const toggleListKey = Object.keys(toggleList);
  const handleToggle = index => {
    setToggleList(prev => ({
      ...prev,
      [toggleListKey[index]]: !prev[toggleListKey[index]],
    }));
  };
  useEffect(() => {
    const trueToggleListKey = Object.keys(toggleList).filter(
      key => toggleList[key],
    );
    setAccount(prevAccount => ({
      ...prevAccount,
      tagList: trueToggleListKey,
    }));
  }, [toggleList]);
  async function fetchData() {
    try {
      const response = await axios.post(`${server}/join`, account);
      console.log('회원가입 성공:', JSON.stringify(account, null, 2));
      setAccount({
        id: '',
        password: '',
        passwordConfirm: '',
        name: '',
        kakaotalkId: '',
        tagList: [],
      });
      navigation.reset({routes: [{name: 'Register4'}]});
    } catch (error) {
      console.error('오류 발생:', error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Margin value={19} />
      <IndicatorBar value={3} />
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>
          {'관심있는 분야를\n모두 선택해주세요'}
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.button0}>
          <RegisterTag
            name={toggleListKey[0]}
            selected={toggleList[toggleListKey[0]]}
            onPress={() => handleToggle(0)}
          />
        </View>
        <View style={styles.button1}>
          <RegisterTag
            name={toggleListKey[1]}
            selected={toggleList[toggleListKey[1]]}
            onPress={() => handleToggle(1)}
          />
        </View>
        <View style={styles.button2}>
          <RegisterTag
            name={toggleListKey[2]}
            selected={toggleList[toggleListKey[2]]}
            onPress={() => handleToggle(2)}
          />
        </View>
        <View style={styles.button3}>
          <RegisterTag
            name={toggleListKey[3]}
            selected={toggleList[toggleListKey[3]]}
            onPress={() => handleToggle(3)}
          />
        </View>
        <View style={styles.button4}>
          <RegisterTag
            name={toggleListKey[4]}
            selected={toggleList[toggleListKey[4]]}
            onPress={() => handleToggle(4)}
          />
        </View>
        <View style={styles.button5}>
          <RegisterTag
            name={toggleListKey[5]}
            selected={toggleList[toggleListKey[5]]}
            onPress={() => handleToggle(5)}
          />
        </View>
        <View style={styles.button6}>
          <RegisterTag
            name={toggleListKey[6]}
            selected={toggleList[toggleListKey[6]]}
            onPress={() => handleToggle(6)}
          />
        </View>
        <View style={styles.button7}>
          <RegisterTag
            name={toggleListKey[7]}
            selected={toggleList[toggleListKey[7]]}
            onPress={() => handleToggle(7)}
          />
        </View>
        <View style={styles.button8}>
          <RegisterTag
            name={toggleListKey[8]}
            selected={toggleList[toggleListKey[8]]}
            onPress={() => handleToggle(8)}
          />
        </View>
        <View style={styles.button9}>
          <RegisterTag
            name={toggleListKey[9]}
            selected={toggleList[toggleListKey[9]]}
            onPress={() => handleToggle(9)}
          />
        </View>
        <View style={styles.button10}>
          <RegisterTag
            name={toggleListKey[10]}
            selected={toggleList[toggleListKey[10]]}
            onPress={() => handleToggle(10)}
          />
        </View>
        <View style={styles.button11}>
          <RegisterTag
            name={toggleListKey[11]}
            selected={toggleList[toggleListKey[11]]}
            onPress={() => handleToggle(11)}
          />
        </View>
        <View style={styles.button12}>
          <RegisterTag
            name={toggleListKey[12]}
            selected={toggleList[toggleListKey[12]]}
            onPress={() => handleToggle(12)}
          />
        </View>
        <View style={styles.button13}>
          <RegisterTag
            name={toggleListKey[13]}
            selected={toggleList[toggleListKey[13]]}
            onPress={() => handleToggle(13)}
          />
        </View>
        <View style={styles.button14}>
          <RegisterTag
            name={toggleListKey[14]}
            selected={toggleList[toggleListKey[14]]}
            onPress={() => handleToggle(14)}
          />
        </View>
        <View style={styles.button15}>
          <RegisterTag
            name={toggleListKey[15]}
            selected={toggleList[toggleListKey[15]]}
            onPress={() => handleToggle(15)}
          />
        </View>
        <View style={styles.button16}>
          <RegisterTag
            name={toggleListKey[16]}
            selected={toggleList[toggleListKey[16]]}
            onPress={() => handleToggle(16)}
          />
        </View>
      </View>
      <View style={styles.nextButton}>
        <NextIcon
          onPress={() => {
            if (account.tagList.length !== 0) {
              fetchData();
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  main: {position: 'absolute', top: 30},
  header: {fontSize: 20, fontWeight: '700'},
  body: {
    fontSize: 32,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  nextButton: {position: 'absolute', right: 15, bottom: 30},
  button0: {position: 'absolute', top: 214, left: 30},
  button1: {position: 'absolute', top: 237, left: 241},
  button2: {position: 'absolute', top: 264, left: 129},
  button3: {position: 'absolute', top: 318, left: 20},
  button4: {position: 'absolute', top: 326, left: 207},
  button5: {position: 'absolute', top: 379, left: 98},
  button6: {position: 'absolute', top: 389, left: 257},
  button7: {position: 'absolute', top: 446, left: 30},
  button8: {position: 'absolute', top: 466, left: 144},
  button9: {position: 'absolute', top: 473, left: 265},
  button10: {position: 'absolute', top: 527, left: 20},
  button11: {position: 'absolute', top: 544, left: 258},
  button12: {position: 'absolute', top: 561, left: 141},
  button13: {position: 'absolute', top: 608, left: 48},
  button14: {position: 'absolute', top: 616, left: 262},
  button15: {position: 'absolute', top: 643, left: 158},
  button16: {position: 'absolute', top: 675, left: 21},
});

export default RegisterScreen3;
