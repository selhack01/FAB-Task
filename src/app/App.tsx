import React from 'react';
import stylesheet from './stylesheet';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation';

const App = () => {
  return <NavigationContainer>
    <RootStack />
  </NavigationContainer>
}

export default App;
