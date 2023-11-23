import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShowAnswerItem from '../Components/ShowAnswerItem';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';

function ShowAnswerScreen({route}) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {roomId, memberId} = route.params;
  const [data, setData] = useState([]);
  const surveyAnswerId = data.length === 0 ? null : data[0].surveyAnswerId;
  const {server} = useContext(DataContext);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `${server}/team-member/creator/showJoined/surveyAnswer`,
        {
          headers: {
            memberId: memberId,
            roomId: roomId,
          },
        },
      );
      setData(response.data);
      console.log('지원자 설문 조회 성공');
      setLoading(false);
    } catch (error) {
      console.error('지원자 설문 조회 실패:', error.message);
      setLoading(false);
    }
  }
  async function failFetch() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${server}/team-member/creator/showJoined/surveyAnswer/fail`,
        {
          headers: {
            surveyAnswerId: surveyAnswerId,
          },
        },
      );
      console.log('FAIL 부여 성공');
      setLoading(false);
    } catch (error) {
      console.error('FAIL 부여 실패:', error.message);
      setLoading(false);
    }
  }
  async function passFetch() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${server}/team-member/creator/showJoined/surveyAnswer/pass`,
        {
          headers: {
            surveyAnswerId: surveyAnswerId,
          },
        },
      );
      console.log('PASS 부여 성공');
      setLoading(false);
    } catch (error) {
      console.error('PASS 부여 실패:', error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const renderItem = ({item, index}) => {
    if (!item.surveyAnswerId) {
      return (
        <View>
          {Object.entries(item).map(([question, answer]) => (
            <ShowAnswerItem
              number={index}
              question={question}
              answer={answer}
              key={index}
            />
          ))}
        </View>
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      <View style={styles.iconContainer}>
        <FailIcon
          onPress={() => {
            Alert.alert(
              '알림',
              '본 지원자를 불합격처리 하시겠습니까?',
              [
                {
                  text: '취소',
                  style: 'cancel',
                },
                {
                  text: '불합격',
                  onPress: () => {
                    failFetch().then(() => {
                      navigation.reset({routes: [{name: 'BottomTab'}]});
                    });
                  },
                  style: 'destructive',
                },
              ],
              {cancelable: false},
            );
          }}
        />
        <PassIcon
          onPress={() => {
            Alert.alert(
              '알림',
              '본 지원자를 합격처리 하시겠습니까?',
              [
                {
                  text: '취소',
                  style: 'cancel',
                },
                {
                  text: '합격',
                  onPress: () => {
                    passFetch().then(() => {
                      navigation.reset({routes: [{name: 'BottomTab'}]});
                    });
                  },
                  style: 'destructive',
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </View>
      {loading ? <LoadingScreen /> : null}
    </SafeAreaView>
  );
}

function FailIcon({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      style={styles.failIcon}>
      <Text style={styles.iconText}>FAIL</Text>
    </TouchableOpacity>
  );
}

function PassIcon({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={onPress}
      style={styles.passIcon}>
      <Text style={styles.iconText}>PASS</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {flex: 1, marginHorizontal: 13},
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    flex: 0.1,
  },
  failIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(24, 192, 122, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {fontSize: 16, fontWeight: '700', color: 'white'},
});

export default ShowAnswerScreen;
