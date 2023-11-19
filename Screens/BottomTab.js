import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import {AIScreen} from './AIScreen';
import TeamScreen from './TeamScreen';
import MyPageScreen from './MyPageScreen';

function BottomTab() {
  const tab = createBottomTabNavigator();
  return (
    <tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {backgroundColor: 'white'},
        headerShown: false,
      }}>
      <tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'home'} size={25} color={color} />
          ),
          title: '홈',
        }}
      />
      <tab.Screen
        name={'AI'}
        component={AIScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'recommend'} size={25} color={color} />
          ),
          title: 'AI 추천',
        }}
      />
      <tab.Screen
        name={'Team'}
        component={TeamScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'groups'} size={25} color={color} />
          ),
          title: '팀원 모집',
        }}
      />
      <tab.Screen
        name={'MyPage'}
        component={MyPageScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name={'person'} size={25} color={color} />
          ),
          title: '내 정보',
        }}
      />
    </tab.Navigator>
  );
}

export default BottomTab;
