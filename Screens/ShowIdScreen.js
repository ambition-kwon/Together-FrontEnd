import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import LinearGradient from 'react-native-linear-gradient';

function ShowIdScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainHeader />
      <Margin value={5} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../Images/textImage.png')}
          style={styles.image}
        />
        <TouchableOpacity activeOpacity={0.3} onPress={null}>
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
              2023 한화 영보드 5기 모집
            </Text>
          </LinearGradient>
        </View>
      </View>
      <Margin value={15} />
      <View style={styles.subContainer}>
        <Item cases={'팀장'} kakao={'joy10231'} nickname={'홍보맨123'} />
        <Item cases={'팀원'} kakao={'khw12313'} nickname={'울산화이팅'} />
        <Item cases={'팀원'} kakao={'dksdpdnjs44'} nickname={'재드래곤'} />
        <Item cases={'팀원'} kakao={'dlwlgus5731'} nickname={'치사량국뽕'} />
      </View>
    </SafeAreaView>
  );
}

function Item({cases, nickname, kakao}) {
  return (
    <View style={styles.itemContainer}>
      <Text>
        {cases === '팀장' ? (
          <Text style={styles.text2}>팀장</Text>
        ) : cases === '팀원' ? (
          <Text style={styles.text3}>팀원</Text>
        ) : undefined}
        <Text style={styles.text1}>{` / ${nickname}`}</Text>
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../Images/kakao.png')} style={styles.kakao} />
        <Text style={styles.text1}>{kakao}</Text>
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
