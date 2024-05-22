/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import Home from '../pages/home';
import OpcoesLocalizacao from '../pages/opcoesLocalizacao';

const Stack = createNativeStackNavigator();


type StackNavigation = {
  Home: undefined,
  OpcoesLocalizacao: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="OpcoesLocalizacao"
          component={OpcoesLocalizacao}     
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;