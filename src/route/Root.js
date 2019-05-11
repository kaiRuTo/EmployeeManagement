import React from 'react';
import {
  createSwitchNavigator, createAppContainer,
} from 'react-navigation';

//import {Login} from '../screen'
import MainManagerTab from './MainManagerTab'
import MainEmployeeTab from './MainEmployeeTab'

export default createAppContainer(createSwitchNavigator(
  {
    // Login: {
    //     screen: Login
    // },
    MainManager: {
        screen: MainManagerTab
    },
    MainEmployee: {
        screen: MainEmployeeTab
    }
  }, {
    initialRouteName: 'MainManager'
  }
))