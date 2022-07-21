import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';
import { getLocation, setLocation } from '../Management/app/applocationManager';

import HomeScreen from './screens/HomeScreen'

const Screens = createStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  dispatch(getLocation());
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
