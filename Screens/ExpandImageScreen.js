import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function ExpandImageScreen({route}) {
  const navigation = useNavigation();
  const {img} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.goBack()}
        style={styles.icon}>
        <Icon name={'clear'} size={30} color={'white'} />
      </TouchableOpacity>
      <Image source={{uri: img}} style={styles.image} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545353',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 357,
    height: 505,
  },
  icon: {
    position: 'absolute',
    top: 60,
    left: 16,
  },
});

export default ExpandImageScreen;
