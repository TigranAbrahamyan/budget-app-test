import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { ROUTE_NAMES } from './routeNames';
import { BalanceScreen } from '../../screens/BalanceScreen';
import { CreditScreen } from '../../screens/CreditScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import { LoginScreen } from '../../screens/LoginScreen';

export const PUBLIC_ROUTES = [
  {
    name: ROUTE_NAMES.LOGIN,
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
];

export const PRIVATE_ROUTES = [
  {
    name: ROUTE_NAMES.HOME,
    component: HomeScreen,
    options: {
      headerLeft: null,
      tabBarIcon: ({ color }) => (
        <FontAwesome name="home" color={color} size={24} />
      ),
    },
  },
  {
    name: ROUTE_NAMES.BALANCE,
    component: BalanceScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <FontAwesome name="money" color={color} size={24} />
      ),
    },
  },
  {
    name: ROUTE_NAMES.CREDIT,
    component: CreditScreen,
    options: {
      tabBarIcon: ({ color }) => (
        <FontAwesome name="credit-card" color={color} size={24} />
      ),
    },
  },
];
