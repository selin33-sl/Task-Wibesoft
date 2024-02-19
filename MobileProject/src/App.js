import {View, Text} from 'react-native';
import React from 'react';
import {HomeScreen} from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './navigation/home-stack';

/**
 * App bileşeni, uygulamanın ana bileşenidir. Navigation Container ve ana ekran stack navigator'ını içerir.
 *
 * @returns {JSX.Element} App bileşeni
 */

export const App = () => {
  return (
    <NavigationContainer>
      {/* Ana ekran stack navigator'ı */}
      <HomeStack />
    </NavigationContainer>
  );
};
