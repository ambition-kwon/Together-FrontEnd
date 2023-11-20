import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Screens/RootStack';
import {DataContextProvider} from './Contexts/DataContext';

function App() {
  return (
    <NavigationContainer>
      <DataContextProvider>
        <SafeAreaProvider>
          <RootStack />
        </SafeAreaProvider>
      </DataContextProvider>
    </NavigationContainer>
  );
}

export default App;
