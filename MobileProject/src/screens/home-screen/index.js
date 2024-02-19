import {View, FlatList, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Button,
  Card,
  Header,
  LinearGradientContainer,
  NotFound,
  Search,
  ToDoAddModal,
} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

/**
 * HomeScreen bileşeni, kullanıcıların yapacakları görevleri yönetebileceği ana ekrandır.
 *
 * @returns {JSX.Element} HomeScreen bileşeni
 */

export const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  // AsyncStorage'dan veri alıp state'e atama
  useEffect(() => {
    const fetchData = async () => {
      await AsyncStorage.removeItem('todos');
      const data = JSON.parse(await AsyncStorage.getItem('todos')) || [];

      setTodos(data);
    };
    fetchData();
  }, []);

  // Yeni bir görev atama modalının görünür olmasını sağlayan fonksiyon
  const handleAddToDo = () => {
    setModalVisible(true);
  };

  // Yeni bir görev atama fonksiyonu
  const saveToDo = async () => {
    const newTodos = [
      ...todos,
      {
        id: Date.now().toString(),
        task: inputValue,
        completed: false,
        isEditing: false,
      },
    ];

    await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
    setInputValue('');
    setModalVisible(false);
  };

  // Yeni bir görev atama modalının görünürlüğünün false olmasını sağlayan fonksiyon
  const closeModal = () => {
    setInputValue('');
    setModalVisible(false);
  };

  // 'todos' listesini filtereleyerek search işlemi gerçekleştiren fonksiyon

  const handleSearch = query => {
    setSearchQuery(query);

    const filteredData = todos.filter(item =>
      item.task.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredData(filteredData);
  };

  // Her bir görev öğesinin render edilmesini sağlayan fonksiyon

  const renderItem = ({item}) => {
    // Bir görev yapıldığında işaretlenme fonksiyonu
    const handleCheck = async id => {
      const newTodos = todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      );
      setTodos(newTodos);
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
    };

    // Bu fonksiyon, bir görevin todos durum dizisindeki isEditing özelliğini açıp kapatma işlevini üstlenir.
    const handleEditToggle = id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo,
        ),
      );
    };

    // Bu fonksiyon, bir görev düzenlendiğinde görev içeriğini (task özelliği) güncelleme işlevini üstlenir.
    const handleSaveChanges = async (task, id) => {
      const newTodos = todos.map(todo =>
        todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo,
      );
      setTodos(newTodos);
      // Güncellenmiş görev listesini AsyncStorage'ye kaydeder
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
    };

    // Bir görev silme fonksiyonu
    const handleDelete = async id => {
      try {
        const newTodos = todos.filter(todo => todo.id !== id);
        // Güncellenmiş görev listesini AsyncStorage'ye kaydeder
        await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
        // Güncellenmiş görev listesini set eder
        setTodos(newTodos);
      } catch (error) {
        Alert.alert('Error', 'An error occurred while deleting todo.');
      }
    };

    // Card bileşenine görev öğesini ileterek render edilmesini sağlar
    return (
      <Card
        item={item}
        handleEditToggle={handleEditToggle}
        handleSaveChanges={handleSaveChanges}
        handleDelete={handleDelete}
        handleCheck={handleCheck}
      />
    );
  };

  return (
    <LinearGradientContainer>
      <View style={style.innerContainer}>
        <Header text={'YAPILACAKLAR'} />

        {/* Search alanını sağlayan component */}
        <Search
          value={searchQuery}
          onChangeText={handleSearch}
          onClear={() => handleSearch('')}
        />
        {/* Kaydedilmiş görevlerin listelenmesi için kullanılan bileşen */}
        <View style={style.listContainer}>
          {/* NotFound görüntülenecek herhangi bir görev bulunmadığında görünmesi gereken component */}
          {filteredData.length === 0 && todos.length === 0 ? (
            <NotFound
              text={
                'Görüntülenecek herhangi bir görev bulunamadı.Lütfen bir görev ekleyiniz.'
              }
            />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={searchQuery ? filteredData : todos}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>

        {/* Yeni bir görev eklemek için input alanı bulunan Modal ın görünürlüğünü tetikleyen buton */}
        <View style={style.addButtonContainer}>
          <Button
            buttonStyle={style.addButton}
            icon
            iconName={'plus'}
            onPress={handleAddToDo}
          />
        </View>
      </View>
      {/* Yeni bir görev eklemek için input alanı bulunan Modal  */}
      <ToDoAddModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        saveToDo={saveToDo}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </LinearGradientContainer>
  );
};
