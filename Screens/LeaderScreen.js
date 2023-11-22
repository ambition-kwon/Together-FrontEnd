import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import LinearGradient from 'react-native-linear-gradient';

function LeaderScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MainHeader />
      <Margin value={5} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../Images/textImage.png')}
          style={styles.image}
        />
        <View style={styles.d_day_container}>
          <Text style={styles.d_day_text}>D-64</Text>
        </View>
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
        <Item cases={'waiting'} />
        <Item cases={'pass'} />
        <Item cases={'pass'} />
      </View>
    </SafeAreaView>
  );
}

function Item({cases}) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.3}
      onPress={null}>
      <Text style={styles.text1}>지원자5 / 19시간전</Text>
      {cases === 'waiting' ? (
        <Text style={styles.text2}>Waiting</Text>
      ) : cases === 'pass' ? (
        <Text style={styles.text3}>PASS</Text>
      ) : undefined}
    </TouchableOpacity>
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
  text1: {fontSize: 13, fontWeight: '700', color: 'black'},
  text2: {fontSize: 14, fontWeight: '700', color: 'black'},
  text3: {fontSize: 14, fontWeight: '700', color: 'blue'},
});

export {LeaderScreen};
