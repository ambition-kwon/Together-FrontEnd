import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Margin from './Margin';

function AiIcon({onPress, name, text}) {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={onPress} style={styles.icon}>
      <Icon name={name} size={45} color={'black'} />
      <Margin value={7} />
      <Text style={styles.icon_text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {alignItems: 'center', justifyContent: 'center'},
  icon_text: {fontSize: 8, fontWeight: '700'},
});

export default AiIcon;
