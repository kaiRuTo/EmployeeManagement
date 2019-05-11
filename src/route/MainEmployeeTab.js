import React from 'react'

import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

import EmployeeTab from './EmployeeTab'

import { AccountScreen } from '../screen'
import { AccountDetailScreen } from '../screen'

const AccountStack = createStackNavigator({
    Account: {
        screen: AccountScreen,
    },
    AccountDetail: {
        screen: AccountDetailScreen
    }
})

export default createBottomTabNavigator({
    AccountStack: AccountStack
})