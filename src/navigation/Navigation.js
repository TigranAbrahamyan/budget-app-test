import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PUBLIC_ROUTES, PRIVATE_ROUTES, ROUTE_NAMES } from '../utils/routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const navigationRef = createNavigationContainerRef();

export const Navigation = ({ isAuth }) => {
  const publicRoutesOptions = ({ navigation }) => {
    if (isAuth) {
      navigation.navigate(ROUTE_NAMES.HOME);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={publicRoutesOptions}>
        {PUBLIC_ROUTES.map((route) => (
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
      navigation.navigate(ROUTE_NAMES.LOGIN);
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator screenOptions={privateRoutesOptions}>
        {PRIVATE_ROUTES.map((route) => (
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
