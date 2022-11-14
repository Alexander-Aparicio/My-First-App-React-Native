import React from 'react';
import {StyleSheet, View} from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxBlue}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  boxPurple: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    position: 'relative',
    top: 100,
    left: -100,
  },
  boxOrange: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    position: 'relative',
    // left: 100,
    top: 50,
  },
  boxBlue: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
    top: -100,
    left: 100,
  },
});

export default TareaScreen;
