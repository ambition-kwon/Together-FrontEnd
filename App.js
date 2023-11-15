import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TeamScreen from './Screens/TeamScreen';

function App() {
  return (
    <SafeAreaProvider>
      <TeamScreen />
    </SafeAreaProvider>
  );
}

export default App;
