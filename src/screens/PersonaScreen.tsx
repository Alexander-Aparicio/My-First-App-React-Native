import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styleG} from '../theme/GlobalStyle';

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.profession,
    });
  }, []);

  return (
    <View style={styleG.layout}>
      <Text style={styleG.text}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
