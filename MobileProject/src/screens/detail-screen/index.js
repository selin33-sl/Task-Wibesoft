import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Header, LinearGradientContainer} from '../../components';
import style from './style';

/**
 * DetailScreen bileşeni, bir görevin detaylarını gösteren ekran bileşenidir.
 *
 * @param {object} route - React Navigation'dan gelen route objesi
 * @returns {JSX.Element} DetailScreen bileşeni
 */

export const DetailScreen = ({route}) => {
  const {item} = route.params; // Parametrelerden görev öğesini alıyoruz
  return (
    <LinearGradientContainer>
      {/* Başlık bileşeni */}
      <Header text={'Detay'} backIcon />
      {/* Detaylar */}
      <ScrollView style={{flex: 1}}>
        <View style={style.container}>
          <Text style={style.text}>{item.task}</Text>
        </View>
      </ScrollView>
    </LinearGradientContainer>
  );
};
