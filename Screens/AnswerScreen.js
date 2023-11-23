import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnswerItem from '../Components/AnswerItem';
import Margin from '../Components/Margin';
import CheckIcon from '../Components/CheckIcon';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';
import LoadingScreen from './LoadingScreen';

function AnswerScreen({route}) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({item, index}) => {
    const handleTextChange = text => {
      setAnswer(prev => ({
        ...prev,
        [index + 1]: text,
      }));
    };
    return (
      <AnswerItem
        question={item.value}
        number={item.key}
        value={answer[index + 1]}
        onChangeText={handleTextChange}
      />
    );
  };
  const {roomId} = route.params;
  const navigation = useNavigation();
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const {server, account} = useContext(DataContext);
  //설문 양식 로드
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(`${server}/home/item/room/apply`, {
        headers: {roomId: roomId},
      });
      const data = Object.entries(response.data).map(([key, value]) => ({
        key,
        value,
      }));
      setQuestion(data);
      console.log('설문 리스트 로드 성공');
      setLoading(false);
    } catch (error) {
      console.error('설문 리스트 로드 실패:', error.message);
      setLoading(false);
    }
  }
  //설문 작성 후 전송
  async function sendData() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${server}/home/item/room/apply/complete`,
        answer,
        {
          headers: {
            roomId: roomId,
            memberId: account.id,
          },
        },
      );
      console.log('설문 답변 전송 성공');
      setLoading(false);
    } catch (error) {
      console.error('설문 답변 전송 실패:', error.message);
      setLoading(false);
    }
  }

  console.log(answer);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'설문에 대한\n답변을 진행해주세요'}</Text>
      </View>
      <Margin value={24} />
      <View style={styles.subContainer}>
        <FlatList data={question} renderItem={renderItem} />
      </View>
      <View style={styles.icon}>
        <CheckIcon
          onPress={() => {
            sendData().then(() => {
              Alert.alert(
                '알림',
                '지원이 성공적으로 완료되었습니다.',
                [
                  {
                    text: '확인',
                    style: 'default',
                  },
                ],
                {cancelable: false},
              );
              navigation.reset({routes: [{name: 'BottomTab'}]});
            });
          }}
        />
      </View>
      {loading ? <LoadingScreen /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {flex: 1, marginHorizontal: 13},
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF792D',
  },
  icon: {position: 'absolute', right: 13, bottom: 30},
});

export default AnswerScreen;
