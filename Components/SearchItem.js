import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SearchItem({value}) {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={null}>
      <View style={styles.container}>
        <Icon name={'search'} color={'black'} size={22} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{value}</Text>
        </View>
        <Icon
          name={'arrow-outward'}
          color={'black'}
          size={24}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
    paddingLeft: 36,
    paddingRight: 30,
  },
  textContainer: {width: '80%', marginLeft: 14},
  text: {
    fontSize: 15,
    fontWeight: '400',
  },
});

export default SearchItem;
