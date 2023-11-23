import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';

function ShowIdScreen({route}) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {roomId} = route.params;
  const [data, setData] = useState([]);
  const img = data.length === 0 ? null : data[data.length - 1].img;
  const {server} = useContext(DataContext);
  const renderItem = ({item}) => {
    if (item.role) {
      return (
        <Item
          role={item.role}
          kakaotalkId={item.kakaotalkId}
          name={item.name}
        />
      );
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `${server}/team-member/creator/showJoined`,
        {
          headers: {
            roomId: roomId,
          },
        },
      );
      setData(response.data);
      console.log('KAKAO ID 조회 성공');
      setLoading(false);
    } catch (error) {
      console.error('KAKAO ID 조회 실패:', error.message);
      setLoading(false);
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MainHeader />
      <Margin value={5} />
      <View style={styles.imageContainer}>
        <Image source={{uri: img}} style={styles.image} />
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            navigation.navigate('ExpandImage', {img: img});
          }}>
          <Image
            source={require('../Images/expandIcon.png')}
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        <View style={styles.subjectContainer}>
          <LinearGradient
            colors={['transparent', 'black']}
            style={styles.linearGradient}>
            <Text style={styles.subjectText} numberOfLines={2}>
              {'수정요망수정요망수정요망수정요망수정요망수정요망'}
            </Text>
          </LinearGradient>
        </View>
      </View>
      <Margin value={15} />
      <View style={styles.subContainer}>
        <FlatList data={data} renderItem={renderItem} />
      </View>
      {loading ? <LoadingScreen /> : null}
    </SafeAreaView>
  );
}

function Item({role, name, kakaotalkId}) {
  return (
    <View style={styles.itemContainer}>
      <Text>
        {role === '팀장' ? (
          <Text style={styles.text2}>팀장</Text>
        ) : role === '팀원' ? (
          <Text style={styles.text3}>팀원</Text>
        ) : undefined}
        <Text style={styles.text1}>{` / ${name}`}</Text>
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../Images/kakao.png')} style={styles.kakao} />
        <Text style={styles.text1}>{kakaotalkId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {flexDirection: 'row', width: '100%', height: 300},
  subContainer: {flex: 1, marginHorizontal: 13},
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(255, 245, 240, 1)',
    marginBottom: 11,
    borderRadius: 11,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {width: '100%', height: '100%'},
  expandIcon: {position: 'absolute', right: 15, top: 9},
  subjectContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  subjectText: {fontSize: 17, fontWeight: '700', color: 'white'},
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {fontSize: 14, fontWeight: '700', color: 'black'},
  text2: {fontSize: 14, fontWeight: '700', color: 'red'},
  text3: {fontSize: 14, fontWeight: '700', color: 'blue'},
  kakao: {width: 20, height: 17, marginRight: 4},
});

export {ShowIdScreen};
