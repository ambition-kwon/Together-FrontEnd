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
    </stack.Navigator>
  );
}
export default RootStack;
