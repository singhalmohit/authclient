import AppNavigator from './components/appNavigator/AppNavigator';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './components/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
