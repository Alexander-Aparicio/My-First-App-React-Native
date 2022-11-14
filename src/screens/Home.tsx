import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

const Home = ({navigation}: Props) => {
  return (
    <View style={styles.layout}>
      <View>
        <Text style={styles.title}>Menú</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Calculadora')}>
          <Text style={styles.textBtn}>Calculadora</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Contador')}>
          <Text style={styles.textBtn}>Contador</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  layout: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#06bcee',
    fontWeight: 'bold',
    marginTop: -70,
    marginBottom: 0,
  },
  btn: {
    backgroundColor: '#06bcee',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 4,
  },
  textBtn: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
});
