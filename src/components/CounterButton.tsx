import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  position: 'rigth' | 'left';
  onPress: () => void;
}

const CounterButton = ({title, onPress, position}: Props) => {
  return (
    <View
      style={[
        styles.boxButton,
        position === 'rigth' ? styles.rigth : styles.left,
      ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#eee384da', false, 30)}
        style={
          position === 'rigth'
            ? [styles.boxButton, styles.rigth]
            : [styles.boxButton, styles.left]
        }>
        <View style={styles.button}>
          <Text style={styles.textButton}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  boxButton: {
    position: 'absolute',
    bottom: 20,
  },
  rigth: {
    right: 20,
  },
  left: {
    left: 20,
  },
  button: {
    borderRadius: 100,
    backgroundColor: 'yellow',
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    elevation: 3,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#515151',
  },
});

export default CounterButton;
