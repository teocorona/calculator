import React from 'react';
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { useCalc } from '../hooks/useCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {

  const {
    number,
    prevNumber,
    clean,
    lastOperator,
    buildNumber,
    toggleeSign,
    handleDel,
    divideBtn,
    multiplyBtn,
    substractBtn,
    addBtn,
    calculate } = useCalc()

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{prevNumber}</Text>
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc
          text="C"
          color="light"
          action={clean}
        />
        <ButtonCalc
          text="+/-"
          color="light"
          action={toggleeSign}
        />
        <ButtonCalc
          text="del"
          color="light"
          action={handleDel}
        />
        <ButtonCalc
          text="/"
          color={lastOperator.current === 3 ? "select" : "contrast" }
          action={divideBtn}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          text="7"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="8"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="9"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="X"
          color={lastOperator.current === 2 ? "select" : "contrast" }
          action={multiplyBtn}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          text="4"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="5"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="6"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="-"
          color={lastOperator.current === 1 ? "select" : "contrast" }
          action={substractBtn}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          text="1"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="2"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="3"
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="+"
          color={lastOperator.current === 0 ? "select" : "contrast" }
          action={addBtn}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalc
          text="0"
          color="dark"
          action={buildNumber}
          large
        />
        <ButtonCalc
          text="."
          color="dark"
          action={buildNumber}
        />
        <ButtonCalc
          text="="
          color="contrast"
          action={calculate}
        />
      </View>
    </View>
  );
};

