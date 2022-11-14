import React, {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const useCalculadora = () => {
  const [valor, setValor] = useState('100');
  const [dataToProcess, setDataToProcess] = useState('0');

  const lastOperation = useRef<Operadores>();

  const clean = () => {
    setValor('0');
    setDataToProcess('0');
  };

  const sendData = () => {
    if (valor.endsWith('.')) {
      setDataToProcess(valor.slice(0, -1));
    } else {
      setDataToProcess(valor);
    }
    setValor('0');
  };

  const toWrite = (value?: string) => {
    if (valor.includes('.') && value === '.') return;
    if (valor.includes('.') && value !== '.') setValor(valor + value);
    if (!valor.includes('.') && value === '.') setValor(valor + value);

    if (valor.startsWith('0') || valor.startsWith('-0')) {
      if (!valor.includes('.') && value === '0') return;
      if (value && !valor.includes('.') && Number(value) > 0) setValor(value);
    }

    if (!valor.startsWith('0') && !valor.startsWith('-0')) {
      setValor(valor + value);
    }
    if (valor.startsWith('.') && value) setValor('0' + valor + value);
    if (valor === '-' && value === '.') setValor(valor + 0 + value);
  };

  const positivoNegativo = () => {
    if (valor.includes('-')) {
      setValor(valor.replace('-', ''));
    } else {
      valor.startsWith('0') && !valor.includes('.')
        ? setValor('-')
        : setValor('-' + valor);
    }
  };

  const del = () => {
    const newValor = valor.replace(/.$/, '');
    newValor === '' || (newValor.startsWith('-') && newValor.length === 1)
      ? setValor('0')
      : setValor(newValor);
  };

  const btnDividir = () => {
    sendData();
    lastOperation.current = Operadores.dividir;
  };
  const btnMultiplicar = () => {
    sendData();
    lastOperation.current = Operadores.multiplicar;
  };
  const btnSumar = () => {
    sendData();
    lastOperation.current = Operadores.sumar;
  };
  const btnRestar = () => {
    sendData();
    lastOperation.current = Operadores.restar;
  };

  const operate = () => {
    const num1 = Number(valor);
    const num2 = Number(dataToProcess);

    switch (lastOperation.current) {
      case Operadores.sumar:
        setValor(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setValor(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setValor(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setValor(`${num2 / num1}`);
        break;

      default:
        break;
    }

    setDataToProcess('0');
  };

  return {
    valor,
    dataToProcess,
    clean,
    toWrite,
    positivoNegativo,
    del,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    operate,
  };
};

export default useCalculadora;
