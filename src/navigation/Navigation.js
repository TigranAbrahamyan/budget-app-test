import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from '../utils/constants/routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigation = ({ isAuth }) => {
  const publicRoutesOptions = ({ navigation }) => {
    if (isAuth) {
      navigation.navigate('Home');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={publicRoutesOptions}>
        {routes.publicRoutes.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const TabNavigation = ({ isAuth }) => {
  const privateRoutesOptions = ({ navigation }) => {
    if (!isAuth) {
      navigation.navigate('Login');
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={privateRoutesOptions}>
        {routes.privateRoutes.map((route) => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
