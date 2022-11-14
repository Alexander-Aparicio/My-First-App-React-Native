import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContadorScreen from '../screens/ContadorScreen';
import Calculadora from '../screens/Calculadora';
import TareaScreen from '../screens/TareaScreen';
import BoxObjectModelScreen from '../screens/BoxObjectModelScreen';
import Home from '../screens/Home';
import Alumnos from '../screens/Alumnos';
import PersonaScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  Calculadora: undefined;
  Home: undefined;
  Persona: {id: number; profession: string; edad: number};
  Contador: undefined;
  Alumnos: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: '#06bcee',
          shadowColor: 'transparent',
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
      {/* <Stack.Screen
        name="Tarea"
        options={{title: 'Tarea'}}
        component={TareaScreen}
      /> */}
      <Stack.Screen
        name="Contador"
        options={{title: 'Contador'}}
        component={ContadorScreen}
      />
      <Stack.Screen
        name="Alumnos"
        options={{title: 'Alumnos'}}
        component={Alumnos}
      />
      <Stack.Screen
        name="Persona"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
