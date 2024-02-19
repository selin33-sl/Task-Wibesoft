import React from 'react';
import style from './style';
import {Headline} from 'react-native-paper';

/**
 * NotFound bileşeni, bir arama sonucu bulunamadığında gösterilecek metni içeren başlık bileşenidir.
 *
 * @param {string} text - Gösterilecek metin
 * @returns {JSX.Element} NotFound bileşeni
 */

export const NotFound = ({text}) => {
  return <Headline style={style.text}>{text}</Headline>;
};
