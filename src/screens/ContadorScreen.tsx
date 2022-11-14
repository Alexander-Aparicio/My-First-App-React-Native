import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import CounterButton from '../components/CounterButton';

const ContadorScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador : {contador}</Text>
      <CounterButton
        title="+1"
        position="rigth"
        onPress={() => setContador(contador + 1)}
      />
      <CounterButton
        title="-1"
        position="left"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    color: '#1e1e1e',
    position: 'relative',
    top: -15,
  },
  btn: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
});

export default ContadorScreen;
