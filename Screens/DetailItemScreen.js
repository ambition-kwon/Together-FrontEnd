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
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import RoomItem from '../Components/RoomItem';
import PlusIcon from '../Components/PlusIcon';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';

function DetailItemScreen({route}) {
  const navigation = useNavigation();
  const {server, account} = useContext(DataContext);
  const {itemId} = route.params;
  const [toggle, setToggle] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(false);
  const [data, setData] = useState({
    sponsor: '',
    img: null,
    Dday: '',
    tag: [],
    title: '',
    deadline: '',
    content: '',
    views: '',
    homepage: '',
  });
  const [roomList, setRoomList] = useState('');
  async function fetchData() {
    try {
      const response = await axios.get(`${server}/home/item`, {
        headers: {itemId: itemId},
      });
      setData(response.data);
      console.log('대외활동 세부정보 로드 성공');
    } catch (error) {
      console.error('대외활동 세부정보 로드 실패:', error.message);
    }
    try {
      const response = await axios.get(`${server}/home/item/room`, {
        headers: {itemId: itemId},
      });
      setRoomList(response.data);
      console.log('룸 리스트 로드 성공');
    } catch (error) {
      console.error('룸 리스트 로드 실패:', error.message);
    }
  }
  async function pickItem() {
    try {
      const response = await axios.post(`${server}/home/item/pick`, {
        headers: {memberId: account.memberId, pick: 'true', itemId: itemId},
      });
      console.log('찜 성공');
    } catch (error) {
      console.error('찜 실패:', error.message);
    }
  }
  const renderItem1 = ({item}) => {
    return <TagItem value={item} />;
  };
  const renderItem2 = ({item}) => {
    return (
      <RoomItem
        joinedNumber={item.joinedNumber}
        creator={item.creator}
        createdDay={item.createdDay}
        content={item.content}
        city={item.city}
        capacity={item.capacity}
        title={item.title}
        onPress={() => navigation.navigate('Answer', {roomId: item.roomId})}
      />
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MainHeader />
      <Margin value={5} />
      <View style={styles.imageContainer}>
        <Image source={{uri: data.img}} style={styles.image} />
        <View style={styles.d_day_container}>
          <Text style={styles.d_day_text}>{data.Dday}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            navigation.navigate('ExpandImage', {img: data.img});
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
              {data.title}
            </Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            setToggleIcon(prev => !prev);
            pickItem();
          }}>
          <Icon
            name={toggleIcon ? 'heart' : 'heart-outline'}
            size={30}
            color={'red'}
            style={{position: 'absolute', right: 7, bottom: 66}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={
            toggle ? styles.onSubToggleContainer : styles.offSubToggleContainer
          }
          activeOpacity={0.3}
          onPress={() => setToggle(true)}>
          <Text style={toggle ? styles.onToggleText : styles.offToggleText}>
            소개
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            toggle ? styles.offSubToggleContainer : styles.onSubToggleContainer
          }
          activeOpacity={0.3}
          onPress={() => setToggle(false)}>
          <Text style={toggle ? styles.offToggleText : styles.onToggleText}>
            팀원모집
          </Text>
        </TouchableOpacity>
      </View>
      {toggle && (
        <>
          <Margin value={5} />
          <View style={styles.tagContainer}>
            <FlatList
              data={data.tag}
              renderItem={renderItem1}
              horizontal={true}
            />
          </View>
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
              marginHorizontal: 16,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 11,
              backgroundColor: '#F4F4F4',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.text3}>{`${data.content}`}</Text>
            </ScrollView>
          </View>
        </>
      )}
      {!toggle && (
        <>
          <View style={styles.roomContainer}>
            <FlatList
              data={roomList}
              renderItem={renderItem2}
              style={{width: '100%'}}
            />
            <View style={styles.icon}>
              <PlusIcon
                onPress={() =>
                  navigation.navigate('CreateRoom1', {itemId: itemId})
                }
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {flexDirection: 'row', width: '100%', height: 300},
  image: {width: '100%', height: '100%'},
  d_day_container: {
    width: 62,
    height: 24,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 121, 45, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 7,
    top: 12,
  },
  d_day_text: {fontSize: 15, fontWeight: '700', color: 'white'},
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
  toggleContainer: {
    width: '100%',
    height: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagContainer: {
    width: '100%',
    paddingLeft: 6,
  },
  roomContainer: {
    flex: 1,
    paddingHorizontal: 13,
    alignItems: 'center',
  },
  onSubToggleContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: '#FF792D',
  },
  offSubToggleContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 11,
    backgroundColor: '#F4F4F4',
  },
  onToggleText: {fontSize: 14, fontWeight: '700', color: '#FF792D'},
  offToggleText: {fontSize: 14, fontWeight: '700', color: 'black'},
  text1: {fontSize: 15, fontWeight: '700', color: 'black'},
  text2: {fontSize: 15, fontWeight: '700', color: '#FF792D'},
  text3: {fontSize: 8, fontWeight: '500'},
  icon: {position: 'absolute', right: 15, top: 297},
});

export {DetailItemScreen};
