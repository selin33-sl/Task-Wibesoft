import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailScreen, HomeScreen} from '../screens';

const Stack = createNativeStackNavigator();

/**
 * HomeStack bileşeni, ana ekran ve detay ekranını içeren bir Native Stack Navigator bileşenidir.
 *
 * @returns {JSX.Element} HomeStack bileşeni
 */

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Ana ekran */}
      <Stack.Screen name="home-screen" component={HomeScreen} />
      {/* Detay ekranı */}
      <Stack.Screen name="detail-screen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
