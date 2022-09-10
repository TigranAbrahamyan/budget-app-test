import { ROUTE_NAMES } from './names';
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
