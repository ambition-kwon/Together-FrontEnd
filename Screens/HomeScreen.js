import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActivityItem from '../Components/ActivityItem';
import SearchItem from '../Components/SearchItem';
import axios from 'axios';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';

function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [searched, setSearched] = useState(false);
  const [query, setQuery] = useState('');
  const [searchRequest, setSearchRequest] = useState([]);
  const {server, account} = useContext(DataContext);
  const [data, setData] = useState('');
  async function fetchHomeData() {
    setLoading(true);
    try {
      const response = await axios.get(`${server}/home`, {
        headers: {memberId: account.id},
      });
      setData(response.data);
      console.log('대외활동 리스트 로드 성공');
      setLoading(false);
    } catch (error) {
      console.error('대외활동 리스트 로드 실패:', error.message);
      setLoading(false);
    }
  }
  async function fetchSearchData() {
    try {
      const response = await axios.get(`${server}/home/search`, {
        params: {
          keyword: query,
        },
      });
      const uniqueArray = Array.from(
        new Set(response.data.map(item => item.id)),
      ).map(id => response.data.find(item => item.id === id));
      setSearchRequest(uniqueArray);
      console.log(JSON.stringify(uniqueArray, null, 2));
      console.log('대외활동 검색 성공');
    } catch (error) {
      console.error('대외활동 검색 실패:', error.message);
    }
  }
  const activityRender1 = ({item}) => {
    return (
      <ActivityItem
        text1={item.title.replace(/[\n\r]/g, '')}
        text2={item.sponsor.replace(/[\n\r]/g, '')}
        text3={item.Dday}
        text4={item.views}
        text5={item.JoinedNumber}
        color={'#FFF1E4'}
        uri={item.img}
        onPress={() => {
          navigation.navigate('DetailItem', {itemId: item.itemId});
        }}
      />
    );
  };
  const activityRender2 = ({item}) => {
    return (
      <ActivityItem
        text1={item.title.replace(/[\n\r]/g, '')}
        text2={item.sponsor.replace(/[\n\r]/g, '')}
        text3={item.Dday}
        text4={item.views}
        text5={item.JoinedNumber}
        color={'#F0F4FB'}
        uri={item.img}
        onPress={() => {
          navigation.navigate('DetailItem', {itemId: item.itemId});
        }}
      />
    );
  };
  const activityRender3 = ({item}) => {
    return (
      <ActivityItem
        text1={item.title.replace(/[\n\r]/g, '')}
        text2={item.sponsor.replace(/[\n\r]/g, '')}
        text3={item.Dday}
        text4={item.views}
        text5={item.JoinedNumber}
        color={'#E3F9DE'}
        uri={item.img}
        onPress={() => {
          navigation.navigate('DetailItem', {itemId: item.itemId});
        }}
      />
    );
  };
  const activityRender4 = ({item}) => {
    return (
      <ActivityItem
        text1={item.title.replace(/[\n\r]/g, '')}
        text2={item.sponsor.replace(/[\n\r]/g, '')}
        text3={item.Dday}
        text4={item.views}
        text5={item.JoinedNumber}
        color={'#F5E0ED'}
        uri={item.img}
        onPress={() => {
          navigation.navigate('DetailItem', {itemId: item.itemId});
        }}
      />
    );
  };
  const searchRender = ({item, index}) => {
    return (
      <SearchItem
        value={item.title}
        onPress={() => {
          navigation.navigate('DetailItem', {itemId: item.id});
        }}
        key={index}
      />
    );
  };
  useEffect(() => {
    fetchHomeData();
  }, []);
  useEffect(() => {
    if (query !== '') {
      fetchSearchData();
    } else {
      setSearchRequest('');
    }
  }, [query]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MainHeader />
      <Margin value={10} />
      <View style={styles.container1}>
        {searched ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              activeOpacity={0.3}
              onPress={() => {
                setSearched(prev => !prev);
                setQuery('');
                setSearchRequest('');
              }}>
              <Icon name={'arrow-back-ios'} size={24} color={'black'} />
            </TouchableOpacity>
            <View style={{width: 14}} />
            <View style={styles.searchContainer2}>
              <TextInput
                placeholder={'공모전, 대외활동, 분야 검색'}
                value={query}
                onChangeText={setQuery}
                autoComplete={null}
                keyboardType={'default'}
                secureTextEntry={false}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                autoCapitalize={'none'}
                autoCorrect={false}
                passwordRules={false}
                autoFocus={true}
                placeholderTextColor={'gray'}
              />
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => {
                  setQuery('');
                }}>
                <Icon
                  name={'clear'}
                  size={22}
                  color={'black'}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.searchContainer1}
            activeOpacity={0.3}
            onPress={() => {
              setSearched(prev => !prev);
            }}>
            <Icon name={'search'} size={24} color={'black'} />
            <View style={{width: 10}} />
            <Text style={styles.searchText}>찾으시는 활동이 있으신가요?</Text>
          </TouchableOpacity>
        )}
      </View>
      {!searched && (
        <View style={styles.container1}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'실시간\n인기 활동👍'}</Text>
            </View>
            <Margin value={12} />
            <View style={styles.scrollHorizontal}>
              <FlatList
                data={data['실시간 인기 활동']}
                renderItem={activityRender1}
                style={null}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'마감\n직전 활동🔥'}</Text>
            </View>
            <Margin value={12} />
            <View style={styles.scrollHorizontal}>
              <FlatList
                data={data['마감 직전 활동']}
                renderItem={activityRender2}
                style={null}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'내가\n관심있는 활동⭐️'}</Text>
            </View>
            <Margin value={12} />
            <View style={styles.scrollHorizontal}>
              <FlatList
                data={data['내가 관심있는 활동']}
                renderItem={activityRender3}
                style={null}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'최근\n추가된 활동😊'}</Text>
            </View>
            <Margin value={12} />
            <View style={styles.scrollHorizontal}>
              <FlatList
                data={data['최근 추가된 활동']}
                renderItem={activityRender4}
                style={null}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Margin value={70} />
          </ScrollView>
        </View>
      )}
      {searched && (
        <>
          <Margin value={10} />
          <FlatList data={searchRequest} renderItem={searchRender} />
        </>
      )}
      {loading ? <LoadingScreen /> : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
  },
  searchContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 340,
    height: 40,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '76%',
    height: 40,
    backgroundColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  subjectText: {
    fontSize: 19,
    fontWeight: '700',
  },
  scrollHorizontal: {
    paddingLeft: 20,
  },
  subjectView: {
    width: '100%',
    paddingLeft: 24,
  },
  searchText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(173, 172, 172, 1)',
  },
});

export default HomeScreen;
