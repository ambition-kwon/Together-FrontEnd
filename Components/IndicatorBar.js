import React from 'react';
import {View, StyleSheet} from 'react-native';

function IndicatorBar({value}) {
  switch (value) {
    case 1:
      return (
        <View style={styles.container}>
          <View style={styles.fillbox} />
          <View style={{width: 13}} />
          <View style={styles.defaultbox} />
          <View style={{width: 13}} />
          <View style={styles.defaultbox} />
        </View>
      );
    case 2:
      return (
        <View style={styles.container}>
          <View style={styles.fillbox} />
          <View style={{width: 13}} />
          <View style={styles.fillbox} />
          <View style={{width: 13}} />
          <View style={styles.defaultbox} />
        </View>
      );
    case 3:
      return (
        <View style={styles.container}>
          <View style={styles.fillbox} />
          <View style={{width: 13}} />
          <View style={styles.fillbox} />
          <View style={{width: 13}} />
          <View style={styles.fillbox} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillbox: {
    width: 94,
    height: 8,
    backgroundColor: 'black',
  },
  defaultbox: {
    width: 94,
    height: 8,
    backgroundColor: '#D9D9D9',
  },
});

export default IndicatorBar;
