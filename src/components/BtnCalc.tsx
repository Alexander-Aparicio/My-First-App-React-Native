import React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: StyleProp<TextStyle>;
  width?: StyleProp<TextStyle>;
  align?: StyleProp<TextStyle>;
  action: (numeroString?: string) => void;
}

const BtnCalc = ({text, color, width, align, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={[styles.btn, color ? color : null, width ? width : null]}>
        <Text style={[styles.btnText, align ? align : null]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BtnCalc;
