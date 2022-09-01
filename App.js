import React from 'react';

import { AuthContext } from './src/context/AuthContext';
import { Navigation, TabNavigation } from './src/navigation/Navigation';

export default function App() {
  const [name, setName] = React.useState('');
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
        isAuth,
        setIsAuth,
      }}
    >
      {!isAuth ? (
        <Navigation isAuth={isAuth} />
      ) : (
        <TabNavigation isAuth={isAuth} />
      )}
    </AuthContext.Provider>
  );
};
