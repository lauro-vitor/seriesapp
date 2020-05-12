import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SerieFormPage from './pages/SerieFormPage';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{title: 'Login'}}
      />
      <Stack.Screen name="Main" component={HomePage} />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        options={({route}) => {
          if (route.params) {
            return {title: route.params.series.title};
          }
        }}
      />
      <Stack.Screen
        name="Form"
        component={SerieFormPage}
        options={({route}) => {
          if (route.params && route.params.serieToEdit) {
            return {title: route.params.serieToEdit.title};
          }
          return {title: 'Nova Série'};
        }}
      />
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
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: 'white',
    fontSize: 24,
  },
};
