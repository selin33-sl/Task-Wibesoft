import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import style from './style';

/**
 * Search bileşeni, bir arama çubuğunu temsil eder.
 *
 * @param {string} value - Arama çubuğunun değeri
 * @param {function} onClear - Arama çubuğunu temizleme işlevi
 * @param {function} onChangeText - Arama çubuğu değerinin değişimini işleyen işlev
 * @returns {JSX.Element} Search bileşeni
 */

export const Search = ({value, onClear, onChangeText}) => {
  return (
    <View style={style.container}>
      {/* Arama çubuğu */}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style.searchBar}
        placeholder={'Ara'}
        placeholderTextColor={'grey'}
      />
      {/* Arama çubuğunu temizleme ikonu */}
      {value ? (
        <Icon
          name="close"
          size={20}
          color={'grey'}
          onPress={onClear}
          style={style.clearIcon}
        />
      ) : null}
    </View>
  );
};
