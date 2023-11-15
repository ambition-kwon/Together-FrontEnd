import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TagItem({value}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`#${value}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(137, 135, 249, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 3.5,
  },
  text: {fontSize: 11, fontWeight: '700', color: 'white'},
});

export default TagItem;
