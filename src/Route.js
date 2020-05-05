import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{title: 'Login'}}
      />
      <Stack.Screen name="Main" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
);
const defaultScreenOptions = {
  title: 'Séries',
  headerStyle: {
    backgroundColor: '#6ca2f7',
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 30,
  },
};
