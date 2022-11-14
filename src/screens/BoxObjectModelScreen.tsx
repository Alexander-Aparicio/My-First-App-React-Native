import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

const BoxObjectModelScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={styles.box1}>CAJA 1</Text>
      <Text style={styles.box2}>CAJA 2</Text>
      <Text style={styles.box3}>CAJA 3</Text>
      <Text style={styles.box4}>CAJA 4</Text>
      {/* <Text>
        W: {width}, H: {height}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#0005',
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    // flexWrap: 'wrap',
    alignContent: 'center',
  },
  box1: {
    padding: 15,
    borderWidth: 0,
    fontSize: 10,
    backgroundColor: 'yellow',
  },
  box2: {
    padding: 15,
    borderWidth: 0,
    fontSize: 10,
    backgroundColor: 'red',
  },
  box3: {
    padding: 15,
    borderWidth: 0,
    fontSize: 10,
    backgroundColor: 'orange',
  },
  box4: {
    padding: 15,
    borderWidth: 0,
    fontSize: 10,
    backgroundColor: 'green',
  },
});

export default BoxObjectModelScreen;
