import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';
import { getLocation, setLocation } from '../Management/app/applocationManager';
import { initRequestForm } from '../Management/app/requestformManager';

import HomeScreen from './screens/HomeScreen'
import RequestScreen from './screens/RequestScreen'
import { Screen } from 'react-native-screens';

const Screens = createStackNavigator();

export default function Navigation() {
  const dispatch = useDispatch();
  dispatch(getLocation());
  dispatch(initRequestForm())
  return (
    <NavigationContainer>
      <Screens.Navigator initialRouteName='HomeScreen'>
        <Screens.Screen name="HomeScreen" component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screens.Screen name="RequestScreen" component={RequestScreen} options={{
          headerTitle: 'My Inquiries',
        }} />
      </Screens.Navigator>
    </NavigationContainer>
  )
}
