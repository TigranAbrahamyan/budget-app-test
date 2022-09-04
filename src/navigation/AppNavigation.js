import { useSelector } from 'react-redux';
import { Navigation, TabNavigation } from './Navigation';

export const AppNavigation = () => {
  const authState = useSelector((state) => state.auth);

  if (authState.isAuth) {
    return <TabNavigation isAuth={authState.isAuth} />;
  }

  return <Navigation isAuth={authState.isAuth} />;
};
