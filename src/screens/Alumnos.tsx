import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styleG} from '../theme/GlobalStyle';

interface Props extends StackScreenProps<RootStackParams, any> {}

const Alumnos = ({navigation}: Props) => {
  return (
    <View style={styleG.layout}>
      <View style={styleG.boxText}>
        <Text style={styleG.title}>Page Alumnos</Text>
      </View>
      <View style={styleG.boxText}>
        <Text
          style={styleG.text}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 1,
              profession: 'Ingeniero',
              edad: 35,
            })
          }>
          Richard Meza
        </Text>
        <Text
          style={styleG.text}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 2,
              profession: 'Economista',
              edad: 33,
            })
          }>
          Alexander Meza
        </Text>
        <Text
          style={styleG.text}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 3,
              profession: 'Informático',
              edad: 31,
            })
          }>
          Maycol Meza
        </Text>
        <Text
          style={styleG.text}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 4,
              profession: 'Estadístico',
              edad: 29,
            })
          }>
          Jeyson Meza
        </Text>
      </View>
    </View>
  );
};

export default Alumnos;
