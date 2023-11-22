import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import NextIcon from '../Components/NextIcon';
import DataContext from '../Contexts/DataContext';
import {useNavigation} from '@react-navigation/native';

function CreateRoomScreen1({route}) {
  const {itemId} = route.params;
  const [headCount, setHeadCount] = useState('');
  const {setMakeRoom, makeRoom, account} = useContext(DataContext);
  const navigation = useNavigation(DataContext);
  const handleHeadCount = text => {
    if (/^0/.test(text)) {
      return;
    }
    setHeadCount(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Margin value={54} />
      <View style={{marginLeft: 33}}>
        <Text style={styles.header}>{'몇 명의 팀원을\n구하실 건가요?'}</Text>
      </View>
      <Margin value={120} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.body}
          placeholder={null}
          value={headCount}
          onChangeText={handleHeadCount}
          autoComplete={'off'}
          keyboardType={'number-pad'}
          secureTextEntry={false}
          autoCapitalize={'none'}
          autoCorrect={false}
          passwordRules={null}
          autoFocus={true}
        />
        <Text style={styles.body}>명</Text>
      </View>
      <View style={styles.button}>
        <NextIcon
          onPress={() => {
            setMakeRoom({
              ...makeRoom,
              capacity: headCount.toString(),
              memberId: account.id,
              itemId: itemId.toString(),
            });
            navigation.navigate('CreateRoom2');
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

export default CreateRoomScreen1;
