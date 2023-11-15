import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MainHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.3} onPress={null}>
        <Text style={styles.text}>Together</Text>
      </TouchableOpacity>
      <View style={styles.subContainer1}>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={null}
          style={styles.circle}>
          <Icon name={'person'} color={'black'} size={20} />
        </TouchableOpacity>
        <View style={{width: 10}} />
        <TouchableOpacity activeOpacity={0.3} onPress={null}>
          <Icon name={'notifications-none'} color={'black'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  subContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {fontSize: 30, fontWeight: '600'},
  circle: {
    width: 27,
    height: 27,
    borderWidth: 3,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainHeader;
