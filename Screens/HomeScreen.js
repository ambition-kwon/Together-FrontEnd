import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActivityItem from '../Components/ActivityItem';
import SearchItem from '../Components/SearchItem';
import {useFocusEffect} from '@react-navigation/native';

function HomeScreen() {
  const [searched, setSearched] = useState(false);
  useFocusEffect(() => {
    console.log('1번 스크린');
  });
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
              }}>
              <Icon name={'arrow-back-ios'} size={24} color={'black'} />
            </TouchableOpacity>
            <View style={{width: 14}} />
            <View style={styles.searchContainer2}>
              <TextInput
                placeholder={'공모전, 대외활동, 분야 검색'}
                value={null}
                onChangeText={null}
                autoComplete={null}
                keyboardType={'default'}
                secureTextEntry={null}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                autoCapitalize={'none'}
                autoCorrect={false}
                passwordRules={null}
              />
              <TouchableOpacity activeOpacity={0.3} onPress={null}>
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
            {/*-----------------------------------------------------------------*/}
            <ScrollView
              style={styles.scrollHorizontal}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(255, 241, 228, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(255, 241, 228, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(255, 241, 228, 1)'}
                uri={null}
              />
            </ScrollView>
            {/*-----------------------------------------------------------------*/}
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'마감\n직전 활동🔥'}</Text>
            </View>
            <Margin value={12} />
            <ScrollView
              style={styles.scrollHorizontal}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(227, 249, 222, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(227, 249, 222, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(227, 249, 222, 1)'}
                uri={null}
              />
            </ScrollView>
            {/*-----------------------------------------------------------------*/}
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'내가\n관심있는 활동⭐️'}</Text>
            </View>
            <Margin value={12} />
            <ScrollView
              style={styles.scrollHorizontal}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(240, 244, 251, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(240, 244, 251, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(240, 244, 251, 1)'}
                uri={null}
              />
            </ScrollView>
            {/*-----------------------------------------------------------------*/}
            <Margin value={24} />
            <View style={styles.subjectView}>
              <Text style={styles.subjectText}>{'최근\n추가된 활동😊'}</Text>
            </View>
            <Margin value={12} />
            <ScrollView
              style={styles.scrollHorizontal}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(245, 224, 237, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(245, 224, 237, 1)'}
                uri={null}
              />
              <ActivityItem
                text1={'2022 고용노동부 일생활균형 호보포스...'}
                text2={'고용노동부'}
                text3={23}
                text4={556}
                text5={1}
                color={'rgba(245, 224, 237, 1)'}
                uri={null}
              />
            </ScrollView>
            <Margin value={70} />
          </ScrollView>
        </View>
      )}
      {/*Toggle End*/}
      {searched && (
        <>
          <Margin value={10} />
          <SearchItem value={'2023 삼성 SW 아카데미'} />
          <SearchItem value={'2023 삼성 SW 아카데미'} />
          <SearchItem value={'2023 삼성 SW 아카데미'} />
          <SearchItem value={'2023 삼성 SW 아카데미'} />
        </>
      )}
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
