import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CheckIcon({onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      style={styles.button}
      onPress={onPress}>
      <Icon name={'check'} size={36} color={'white'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(24, 192, 122, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckIcon;
