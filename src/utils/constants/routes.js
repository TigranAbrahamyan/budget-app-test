import FontAwesome from 'react-native-vector-icons/FontAwesome';

import routesPath from './routesPath';
import { BalanceScreen } from '../../screens/BalanceScreen';
import { CreditScreen } from '../../screens/CreditScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import { LoginScreen } from '../../screens/LoginScreen';

export default {
  public: [
    {
      name: routesPath.LOGIN,
      component: LoginScreen,
      options: {
        headerShown: false,
      },
    },
  ],
  private: [
    {
      name: routesPath.HOME,
      component: HomeScreen,
      options: {
        headerLeft: null,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" color={color} size={24} />
        ),
      },
    },
    {
      name: routesPath.BALANCE,
      component: BalanceScreen,
      options: {
        tabBarIcon: ({ color }) => (
          <FontAwesome name="money" color={color} size={24} />
        ),
      },
    },
    {
      name: routesPath.CREDIT,
      component: CreditScreen,
      options: {
        tabBarIcon: ({ color }) => (
          <FontAwesome name="credit-card" color={color} size={24} />
        ),
      },
    },
  ],
};
