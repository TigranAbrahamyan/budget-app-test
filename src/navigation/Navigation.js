import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from '../utils/constants/routes';
import routesPath from '../utils/constants/routesPath';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const navigationRef = createNavigationContainerRef();

export const Navigation = ({ isAuth }) => {
  const publicRoutesOptions = ({ navigation }) => {
    if (isAuth) {
      navigation.navigate(routesPath.HOME);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={publicRoutesOptions}>
        {routes.public.map((route) => (
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
      navigation.navigate(routesPath.LOGIN);
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator screenOptions={privateRoutesOptions}>
        {routes.private.map((route) => (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{
              headerLeft: () => (
                <AntDesign
                  name="back"
                  style={{ fontSize: 24, marginLeft: 12 }}
                  onPress={() => navigationRef.goBack()}
                />
              ),
              ...route.options,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
