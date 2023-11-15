import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Margin from '../Components/Margin';
import QuestionItem from '../Components/QuestionItem';
import PlusIcon from '../Components/PlusIcon';
import CheckIcon from '../Components/CheckIcon';

function CreateRoomScreen4() {
  const [question, setQuestion] = useState([]);
  const addQuestion = () => {
    setQuestion([...question, '']);
  };
  const resultObject = question.reduce((acc, value, index) => {
    acc[`${index + 1}번`] = value;
    return acc;
  }, {});
  console.log(resultObject);
  const renderItem = ({item, index}) => {
    return (
      <QuestionItem
        value={item}
        onChangeText={text => {
          setQuestion(prev => {
            const update = [...prev];
            update[index] = text;
            return update;
          });
        }}
        number={index + 1}
        onPress={() => {
          Alert.alert(
            '알림',
            '질문을 삭제하시겠습니까?',
            [
              {
                text: '취소',
                style: 'cancel',
              },
              {
                text: '삭제',
                onPress: () => {
                  setQuestion(prev => {
                    const update = [...prev];
                    update.splice(index, 1);
                    return update;
                  });
                },
                style: 'destructive',
              },
            ],
            {cancelable: false},
          );
        }}
      />
    );
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <Margin value={54} />
          <View style={{marginLeft: 33}}>
            <Text style={styles.header}>
              {'팀원에게 받을\n설문을 만들어주세요'}
            </Text>
          </View>
          <Margin value={24} />
          <View style={{flex: 1, marginHorizontal: 13}}>
            <FlatList
              data={question}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={styles.icon1}>
            <PlusIcon onPress={() => addQuestion()} />
          </View>
          <View style={styles.icon2}>
            <CheckIcon onPress={null} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF792D',
  },
  icon1: {position: 'absolute', right: 70, bottom: 30},
  icon2: {position: 'absolute', right: 13, bottom: 30},
});

export default CreateRoomScreen4;
