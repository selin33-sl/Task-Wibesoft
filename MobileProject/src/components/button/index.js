import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../theme';
import style from './style';

export const Button = ({
  onPress,
  text,
  buttonStyle,
  textStyle,
  icon,
  iconName,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style.button, buttonStyle]}>
      {icon ? (
        <Icon name={iconName} size={18} color={colors.white} />
      ) : (
        <Text style={[style.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
