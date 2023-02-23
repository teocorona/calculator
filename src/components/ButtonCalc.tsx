import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface buttonProps {
  text: string;
  color: 'light' | 'dark' | 'contrast' | 'select';
  large?: boolean;
  action: (text: string) => void;
}

export const ButtonCalc = ({ text, color, large = false, action }: buttonProps) => {

  return (
    <TouchableOpacity
      style={[
        styles.button,
        color === 'dark' ? styles.dark :
        color === 'light' ? styles.light :
        color === 'contrast' ? styles.contrast :
        styles.select,
        large && styles.large
      ]}
      activeOpacity={0.5}
      onPress={() => action(text)}
    >
      <Text
        style={[
          styles.buttonText,
          color === 'dark' ? styles.darkT :
          color === 'light' ? styles.lightT :
          color === 'contrast' ? styles.contrastT :
          styles.selectT
        ]}>{text}</Text>
    </TouchableOpacity>
  );
};

