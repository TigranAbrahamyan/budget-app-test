import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { BalanceScreen } from '../../screens/BalanceScreen';
import { HomeScreen } from '../../screens/HomeScreen';
import { LoginScreen } from '../../screens/LoginScreen';

export default {
  publicRoutes: [
    {
      name: 'Login',
      component: LoginScreen,
      options: {
        headerShown: false,
      },
    },
  ],
  privateRoutes: [
    {
      name: 'Home',
      component: HomeScreen,
      options: {
        headerShown: true,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="home" color={color} size={24} />
        ),
      },
    },
    {
      name: 'Balance',
      component: BalanceScreen,
      options: {
        headerShown: true,
        tabBarIcon: ({ color }) => (
          <FontAwesome name="money" color={color} size={24} />
        ),
      },
    },
  ],
};
