import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

/**
 * Card bileşeni, bir görev öğesini temsil eden kart bileşenidir.
 *
 * @param {object} item - Görev öğesini temsil eden obje
 * @param {function} handleSaveChanges - Görev düzenleme kaydetme işlevi
 * @param {function} handleEditToggle - Görev düzenleme modunu açma/kapatma işlevi
 * @param {function} handleDelete - Görev silme işlevi
 * @param {function} handleCheck - Görev tamamlama işlevi
 * @returns {JSX.Element} Card bileşeni
 */

export const Card = ({
  item,
  handleSaveChanges,
  handleEditToggle,
  handleDelete,
  handleCheck,
}) => {
  const navigation = useNavigation();

  const [inputValue, setInputValue] = useState(item.task);
  // Card bileşenine tıklandığında detay sayfasına gitme işlevi
  const handleCardPress = () => {
    navigation.navigate('detail-screen', {item: item});
  };
  // Icon düğmesi bileşeni
  const IconButton = ({name, color, onPress}) => {
    return (
      <TouchableOpacity style={style.button} onPress={onPress}>
        <Icon name={name} color={color} size={25} />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableOpacity style={style.container} onPress={handleCardPress}>
      {/* Checkbox bileşeni */}
      <CheckBox
        tintColors
        value={item?.completed}
        onValueChange={() => handleCheck(item?.id)}
        style={style.checkbox}
      />
      {/* Görev düzenleme modunda ise metin girişi, değilse metin */}
      {item.isEditing ? (
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          style={style.input}
          textAlign="left"
          editable={item.isEditing}
          multiline={false}
        />
      ) : (
        <Text
          style={{
            ...style.text,
            color: item?.completed ? colors.gray : colors.black,
            textDecorationLine: item?.completed ? 'line-through' : 'none',
          }}>
          {/* Görev metnini kısaltma ve gerektiğinde üç nokta ekleme */}
          {item?.task && item?.task.length > 18
            ? item?.task.substring(0, 18) + '...'
            : item?.task}
        </Text>
      )}
      {/* İşlev düğmeleri */}
      <View style={style.buttonContainer}>
        {/* Düzenleme/kaydetme düğmesi */}
        <IconButton
          onPress={() =>
            item?.isEditing
              ? handleSaveChanges(inputValue, item?.id)
              : handleEditToggle(item?.id)
          }
          name={item?.isEditing ? 'check' : 'pencil-outline'}
          color={item?.isEditing ? colors.green : colors.black}
        />
        {/* Silme düğmesi */}
        <IconButton
          name={'delete-outline'}
          color={colors.red}
          onPress={() => handleDelete(item?.id)}
        />
      </View>
    </TouchableOpacity>
  );
};
