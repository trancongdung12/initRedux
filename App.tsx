import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/features/store';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
