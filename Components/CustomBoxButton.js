import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function CustomBoxButton({value, swap, onPress}) {
  return (
    <TouchableOpacity
      style={swap ? styles.container1 : styles.container2}
      activeOpacity={0.3}
      onPress={onPress}>
      <Text style={swap ? styles.text1 : styles.text2}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: 295,
    height: 49,
    borderRadius: 18,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: 295,
    height: 49,
    borderRadius: 18,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default CustomBoxButton;
