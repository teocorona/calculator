import { useRef, useState } from "react";

enum Operators {
  add, subtract, multiply, divide
}

export const useCalc = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const lastOperator = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('');
    lastOperator.current = undefined;
  }
  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') { return }

    if (number.startsWith('0') || number.startsWith('-0')) {

      if (textNumber === '.') {
        setNumber(number + textNumber);

      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }

    } else {
      setNumber(number + textNumber);
    }
  }

  const toggleeSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number)
    }
  };

  const handleDel = () => {
    const length = number.length;
    if (number.includes('-') && length === 2) {
      setNumber('0')
    } else if (length > 1) {
      const newNumber = number.slice(0, -1);
      setNumber(newNumber)
    } else {
      setNumber('0')
    }
  };

  const sendNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }
    setNumber('0')
  };

  const divideBtn = () => {
    sendNumber()
    lastOperator.current = Operators.divide;
  };

  const multiplyBtn = () => {
    sendNumber()
    lastOperator.current = Operators.multiply;
  };

  const substractBtn = () => {
    sendNumber()
    lastOperator.current = Operators.subtract;
  };

  const addBtn = () => {
    sendNumber()
    lastOperator.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);
    switch (lastOperator.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
        }
        lastOperator.current = undefined
        setPrevNumber('');
  }
  return {
    number,
    prevNumber,
    lastOperator,
    clean,
    buildNumber,
    toggleeSign,
    handleDel,
    divideBtn,
    multiplyBtn,
    substractBtn,
    addBtn,
    calculate
  }
}
