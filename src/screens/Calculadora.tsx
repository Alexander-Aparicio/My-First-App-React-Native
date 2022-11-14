import React from 'react';
import {Text, View} from 'react-native';
import BtnCalc from '../components/BtnCalc';
import useCalculadora from '../hooks/useCalculadora';
import {styles} from '../theme/appTheme';

const Calculadora = () => {
  const {
    dataToProcess,
    valor,
    clean,
    positivoNegativo,
    del,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    toWrite,
    operate,
  } = useCalculadora();

  return (
    <View style={styles.boxG}>
      <View style={styles.container}>
        {dataToProcess !== '0' && (
          <Text style={styles.resultSmall}>{dataToProcess}</Text>
        )}

        <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
          {valor}
        </Text>
      </View>
      <View style={styles.boxRowBtns}>
        <BtnCalc text="C" action={clean} />
        <BtnCalc text="+/-" action={positivoNegativo} />
        <BtnCalc text="del" action={del} />
        <BtnCalc text="/" color={styles.btnYellow} action={btnDividir} />
      </View>
      <View style={styles.boxRowBtns}>
        <BtnCalc text="7" action={toWrite} />
        <BtnCalc text="8" action={toWrite} />
        <BtnCalc text="9" action={toWrite} />
        <BtnCalc text="X" color={styles.btnYellow} action={btnMultiplicar} />
      </View>
      <View style={styles.boxRowBtns}>
        <BtnCalc text="4" action={toWrite} />
        <BtnCalc text="5" action={toWrite} />
        <BtnCalc text="6" action={toWrite} />
        <BtnCalc text="-" color={styles.btnYellow} action={btnRestar} />
      </View>
      <View style={styles.boxRowBtns}>
        <BtnCalc text="1" action={toWrite} />
        <BtnCalc text="2" action={toWrite} />
        <BtnCalc text="3" action={toWrite} />
        <BtnCalc text="+" color={styles.btnYellow} action={btnSumar} />
      </View>
      <View style={styles.boxRowBtns}>
        <BtnCalc
          text="0"
          width={styles.btnRect}
          align={styles.alignLeft}
          action={toWrite}
        />
        <BtnCalc text="." action={toWrite} />
        <BtnCalc text="=" color={styles.btnYellow} action={operate} />
      </View>
    </View>
  );
};

export default Calculadora;
