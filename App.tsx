import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor="rgb(5,5,15)"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
