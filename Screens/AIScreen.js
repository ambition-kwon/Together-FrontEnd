import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import TagItem from '../Components/TagItem';
import AiIcon from '../Components/AiIcon';
import DataContext from '../Contexts/DataContext';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function AIScreen() {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  const {server, account} = useContext(DataContext);
  const [data, setData] = useState({});
  async function receiveFetch() {
    try {
      const response = await axios.get(`${server}/ai`, {
        headers: {
          memberId: account.id,
        },
      });
      setData(response.data);
      console.log('AI 추천 리스트 로드 성공');
    } catch (error) {
      console.error('AI 추천 리스트 로드 실패:', error.message);
    }
  }
  async function sendFetch(interest) {
    try {
      const response = await axios.post(`${server}/ai/interest`, {
        headers: {
          memberId: account.id,
          itemId: null,
          interest: interest,
        },
      });
      receiveFetch();
      console.log('관심도 평가 성공');
    } catch (error) {
      console.error('관심도 평가 실패:', error.message);
    }
  }

  useEffect(() => {
    receiveFetch();
  }, []);
  const renderItem1 = ({item}) => {
    return <TagItem value={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <MainHeader />
      <Margin value={10} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setToggle(prev => !prev);
        }}
        style={styles.mainContainer}>
        <Image source={{uri: data.img}} style={styles.image} />
        <View style={styles.d_day_container}>
          <Text style={styles.d_day_text}>{data.Dday}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.expandIcon}
          onPress={() => {
            navigation.navigate('ExpandImage', {img: data.img});
          }}>
          <Image source={require('../Images/expandIcon.png')} />
        </TouchableOpacity>
        {toggle && (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setToggle(false)}
            style={{
              backgroundColor: 'rgba(217, 217, 217, 0.93)',
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}>
            <Margin value={5} />
            <View style={{flexDirection: 'row', marginLeft: 12}}>
              <Text style={styles.text1}>모집기간 : </Text>
              <Text style={styles.text2}>{`~ ${data.deadline}`}</Text>
            </View>
            <Margin value={5} />
            <Text style={[styles.text1, {marginLeft: 12}]}>상세설명</Text>
            <View
              style={{
                flex: 1,
                marginVertical: 4,
                marginHorizontal: 16,
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 11,
                backgroundColor: '#F4F4F4',
              }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View onStartShouldSetResponder={() => true}>
                  <Text style={styles.text3}>{`${data.content}`}</Text>
                </View>
              </ScrollView>
            </View>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <Margin value={5} />
      <Text style={styles.subjectText} numberOfLines={2}>
        {data.title}
      </Text>
      <Margin value={8} />
      <View style={styles.tagContainer}>
        <FlatList data={data.tag} renderItem={renderItem1} horizontal={true} />
      </View>
      <Margin value={14} />
      <View style={styles.iconContainer}>
        <AiIcon
          name={'frowning'}
          text={'정말 관심 없어요'}
          onPress={() => {
            sendFetch(1);
          }}
        />
        <AiIcon
          name={'neutral'}
          text={'관심 없어요'}
          onPress={() => {
            sendFetch(2);
          }}
        />
        <AiIcon
          name={'open-mouth'}
          text={'그저 그래요'}
          onPress={() => {
            sendFetch(3);
          }}
        />
        <AiIcon
          name={'slightly-smile'}
          text={'관심 있어요'}
          onPress={() => {
            sendFetch(4);
          }}
        />
        <AiIcon
          name={'smiley'}
          text={'정말 관심 있어요'}
          onPress={() => {
            sendFetch(5);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  image: {width: '100%', height: 490},
  d_day_container: {
    width: 62,
    height: 24,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 121, 45, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 21,
    top: 10,
  },
  tagContainer: {
    width: '100%',
    paddingLeft: 13,
  },
  iconContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  mainContainer: {alignItems: 'center', paddingHorizontal: 12},
  d_day_text: {fontSize: 15, fontWeight: '700', color: 'white'},
  expandIcon: {position: 'absolute', right: 19, top: 9},
  subjectText: {fontSize: 17, fontWeight: '700', paddingHorizontal: 17},
  text1: {fontSize: 15, fontWeight: '700', color: 'black'},
  text2: {fontSize: 15, fontWeight: '700', color: '#FF792D'},
  text3: {fontSize: 8, fontWeight: '500'},
});

export {AIScreen};
