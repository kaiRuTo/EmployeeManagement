import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import AppNavigator from './src/route/Root';
import NavigationService from './src/route/NavigationService'
import createStore from './src/store'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


export const { store, persistor } = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <View style={{ flex: 1 }}>
            {Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
            <AppNavigator ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            />
          </View>
        </PersistGate>
      </Provider >
    );
  }
}

