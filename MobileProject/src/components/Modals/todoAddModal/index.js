import {View, Modal, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '../../button';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * ToDoAddModal bileşeni, yeni bir görev eklemek için kullanıcının bir metin girdisi yapmasını sağlayan modalı oluşturur.
 *
 * @param {boolean} modalVisible - Modalın görünürlüğünü belirten boolean değer
 * @param {function} closeModal - Modalı kapatan fonksiyon
 * @param {function} saveToDo - Yeni görevi kaydeden fonksiyon
 * @param {string} inputValue - Kullanıcının girdiği metni tutan değer
 * @param {function} setInputValue - Metin girişini güncelleyen fonksiyon
 * @returns {JSX.Element} ToDoAddModal bileşeni
 */

export const ToDoAddModal = ({
  modalVisible,
  closeModal,
  saveToDo,
  inputValue,
  setInputValue,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={style.modalContainer}>
        <View style={style.innerContainer}>
          {/* Modalı kapatmak için X ikonu */}
          <View style={style.iconsContainer}>
            <TouchableOpacity onPress={closeModal}>
              <Icon
                name={'close'}
                size={32}
                style={{
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View>
          {/* Kullanıcının metin girdisini yapabileceği TextInput */}
          <TextInput
            style={style.textInput}
            placeholder="Enter ToDo"
            value={inputValue}
            onChangeText={setInputValue}
          />
          {/* İptal ve Kaydet butonları */}
          <View style={style.buttonContainer}>
            {/* İptal Butonu */}
            <Button
              text={'İptal'}
              onPress={closeModal}
              buttonStyle={{...style.button, backgroundColor: '#0F7DC1'}}
            />
            {/* Kaydet Butonu */}
            <Button
              text={'Kaydet'}
              onPress={saveToDo}
              buttonStyle={style.button}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
