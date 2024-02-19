import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';
import {colors} from '../../theme';
import {SafeAreaView} from 'react-native';

/**
 * LinearGradientContainer bileşeni, bir linear gradient arka planıyla iç içe bir SafeAreaView içerisine diğer bileşenleri alır.
 *
 * @param {React.ReactNode} children - İçerisine alınacak diğer bileşen(ler)
 * @returns {JSX.Element} LinearGradientContainer bileşeni
 */

export const LinearGradientContainer = ({children}) => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[colors.primary1, colors.primary2]}
        style={style.container}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};
