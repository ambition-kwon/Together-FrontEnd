import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';

function CreateRoomScreen2() {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const {setMakeRoom, makeRoom} = useContext(DataContext);
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'활동지역을\n선택해주세요'}</Text>
      </View>
      <Margin value={120} />
      <TextInput
        style={styles.body}
        placeholder={null}
        value={city}
        onChangeText={setCity}
        autoComplete={'off'}
        keyboardType={'default'}
        secureTextEntry={false}
        autoCapitalize={'none'}
        autoCorrect={false}
        passwordRules={null}
        autoFocus={true}
      />
      <View style={styles.button}>
        <NextIcon
          onPress={() => {
            setMakeRoom({...makeRoom, city: city});
            navigation.navigate('CreateRoom3');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF792D',
  },
  body: {
    fontSize: 32,
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 490,
  },
});

export default CreateRoomScreen2;
