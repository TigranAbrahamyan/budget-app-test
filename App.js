import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './src/store';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppNavigation />
    </ReduxProvider>
  );
};
