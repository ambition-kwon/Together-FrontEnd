import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTab from './Screens/BottomTab';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomTab />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
