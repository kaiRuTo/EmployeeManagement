import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , StatusBar} from 'react-native';

import AppNavigator from './src/route/Root';
import NavigationService from './src/route/NavigationService'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {Platform.OS === 'ios' && <StatusBar barStyle={'dark-content'} />}
        <AppNavigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
      </View>
    );
  }
}

