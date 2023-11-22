import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import LoginScreen from './LoginScreen';
import RegisterScreen1 from './RegisterScreen1';
import RegisterScreen2 from './RegisterScreen2';
import RegisterScreen3 from './RegisterScreen3';
import RegisterScreen4 from './RegisterScreen4';
import EditPasswordScreen from './EditPasswordScreen';
import EditKakaoScreen from './EditKakaoScreen';
import EditTagScreen from './EditTagScreen';
import LikeActivityScreen from './LikeActivityScreen';
import {DetailItemScreen} from './DetailItemScreen';
import ExpandImageScreen from './ExpandImageScreen';
import CreateRoomScreen1 from './CreateRoomScreen1';
import CreateRoomScreen2 from './CreateRoomScreen2';
import CreateRoomScreen3 from './CreateRoomScreen3';
import CreateRoomScreen4 from './CreateRoomScreen4';
import AnswerScreen from './AnswerScreen';
import {ShowIdScreen} from './ShowIdScreen';
import {LeaderScreen} from './LeaderScreen';
import ShowAnswerScreen from './ShowAnswerScreen';
import NoticeScreen from './NoticeScreen';

function RootStack() {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator
      screenOptions={{
        headerTintColor: 'black',
        headerBackTitle: '뒤로가기',
      }}>
      <stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'BottomTab'}
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Register4'}
        component={RegisterScreen4}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Register1'}
        component={RegisterScreen1}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Register2'}
        component={RegisterScreen2}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Register3'}
        component={RegisterScreen3}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'EditPassword'}
        component={EditPasswordScreen}
        options={{
          headerTitle: '비밀번호 재설정',
        }}
      />
      <stack.Screen
        name={'EditKakao'}
        component={EditKakaoScreen}
        options={{
          headerTitle: '연락처 변경',
        }}
      />
      <stack.Screen
        name={'EditTag'}
        component={EditTagScreen}
        options={{
          headerTitle: '관심태그 재설정',
        }}
      />
      <stack.Screen
        name={'LikeActivity'}
        component={LikeActivityScreen}
        options={{
          headerTitle: '관심있는 활동',
        }}
      />
      <stack.Screen
        name={'DetailItem'}
        component={DetailItemScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'ExpandImage'}
        component={ExpandImageScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'CreateRoom1'}
        component={CreateRoomScreen1}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'CreateRoom2'}
        component={CreateRoomScreen2}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'CreateRoom3'}
        component={CreateRoomScreen3}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'CreateRoom4'}
        component={CreateRoomScreen4}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Answer'}
        component={AnswerScreen}
        options={{
          headerTitle: '설문 답변',
        }}
      />
      <stack.Screen
        name={'ShowId'}
        component={ShowIdScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'Leader'}
        component={LeaderScreen}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name={'ShowAnswer'}
        component={ShowAnswerScreen}
        options={{
          headerTitle: '지원자 설문 조회',
        }}
      />
      <stack.Screen
        name={'Notice'}
        component={NoticeScreen}
        options={{
          headerTitle: '오픈소스 라이선스',
        }}
      />
    </stack.Navigator>
  );
}
export default RootStack;
