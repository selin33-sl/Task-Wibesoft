import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

/**
 * Header bileşeni, bir başlık çubuğunu temsil eder ve genellikle sayfanın üst kısmında bulunur.
 *
 * @param {boolean} backIcon - Geri butonunun gösterilip gösterilmeyeceğini belirten boolean değer
 * @param {string} text - Başlık metni
 * @returns {JSX.Element} Header bileşeni
 */

export const Header = ({backIcon, text}) => {
  // Geri butonu bileşeni
  const BackButton = ({onPress}) => (
    <TouchableOpacity style={style.backIconContainer} onPress={onPress}>
      <Icon name={'chevron-left'} size={35} style={style.backIcon} />
    </TouchableOpacity>
  );

  const navigation = useNavigation();
  return (
    <View style={style.container}>
      {/* Geri butonunu gösterme kontrolü */}
      {backIcon && <BackButton onPress={() => navigation.goBack()} />}
      {/* Başlık metni */}
      <Text style={style.text}>{text}</Text>
    </View>
  );
};
