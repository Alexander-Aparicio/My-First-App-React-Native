import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContadorScreen from '../screens/ContadorScreen';
import Calculadora from '../screens/Calculadora';
import TareaScreen from '../screens/TareaScreen';
import BoxObjectModelScreen from '../screens/BoxObjectModelScreen';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          backgroundColor: '#06bcee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 18,
        },
      }}>
      <Stack.Screen
        name="Home"
        options={{
          title: 'My First App',
        }}
        component={Home}
      />
      <Stack.Screen
        name="Calculadora"
        options={{title: 'Calculadora'}}
        component={Calculadora}
      />
      <Stack.Screen
        name="Tarea"
        options={{title: 'Tarea'}}
        component={TareaScreen}
      />
      <Stack.Screen
        name="Contador"
        options={{title: 'Contador'}}
        component={ContadorScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
