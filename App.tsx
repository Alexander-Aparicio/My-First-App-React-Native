import 'react-native-gesture-handler';
import React from 'react';
// import {SafeAreaView} from 'react-native';
// import {styles} from './src/theme/appTheme';
import StackNavigator from './src/navigator/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
