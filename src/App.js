import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { registerRootComponent } from 'expo';

import { store } from './store';
import { AppNavigation } from './navigation/AppNavigation';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppNavigation />
    </ReduxProvider>
  );
};

registerRootComponent(App);
