import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen'

const Screens = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Screens.Navigator initialRouteName='HomeScreen'>
        <Screens.Screen name="HomeScreen" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Screens.Navigator>
    </NavigationContainer>
  )
}