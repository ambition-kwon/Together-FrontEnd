import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function RegisterTag({name, selected, onPress}) {
  return (
    <TouchableOpacity
      style={selected ? styles.container1 : styles.container2}
      activeOpacity={0.3}
      onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container1: {
    width: 106,
    height: 30,
    borderRadius: 17,
    borderWidth: 2,
    backgroundColor: 'rgba(255, 168, 119, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },
  container2: {
    width: 106,
    height: 30,
    borderRadius: 17,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterTag;
