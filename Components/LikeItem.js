import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function LikeItem({uri, text1, text2, text3, text4, text5, color}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <Image source={require('../Images/textImage.png')} style={styles.image} />
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
      <Text style={styles.text3}>{`D-${text3}`}</Text>
      <Icon name={'search'} size={11.5} color={'black'} style={styles.icon1} />
      <Text style={styles.text4}>{text4}</Text>
      <Icon name={'groups'} size={11.5} color={'black'} style={styles.icon2} />
      <Text style={styles.text5}>{text5}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 220,
    borderRadius: 11,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 137,
    height: 137,
    borderRadius: 11,
    marginTop: 5,
    marginBottom: 2.5,
  },
  text1: {fontSize: 16, fontWeight: '700', paddingHorizontal: 15},
  text2: {
    fontSize: 9,
    fontWeight: '600',
    position: 'absolute',
    left: 18,
    top: 186,
  },
  text3: {
    fontSize: 9,
    fontWeight: '700',
    position: 'absolute',
    left: 18,
    top: 199,
    color: 'rgba(255, 94, 3, 1)',
  },
  text4: {
    fontSize: 9,
    fontWeight: '500',
    position: 'absolute',
    left: 80,
    top: 199,
  },
  text5: {
    fontSize: 9,
    fontWeight: '600',
    position: 'absolute',
    left: 144,
    top: 199,
  },
  icon1: {
    position: 'absolute',
    left: 68,
    top: 199,
  },
  icon2: {
    position: 'absolute',
    left: 130,
    top: 199,
  },
});

export default LikeItem;
