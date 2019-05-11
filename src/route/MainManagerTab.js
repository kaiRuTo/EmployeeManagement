import React from 'react'
import {Text} from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

import EmployeeTab from './EmployeeTab'

import { CreateEmployeeScreen } from '../screen'
import { DetailEmloyeeScreen } from '../screen'

import { WageListScreen } from '../screen'
import { CreateWageScreen } from '../screen'
import { DetailWageScreen } from '../screen'

import { PositionListScreen } from '../screen'
import { CreatePositionScreen } from '../screen'
import { DetailPositionScreen } from '../screen'

import { LevelListScreen } from '../screen'
import { CreateLevelScreen } from '../screen'
import { DetailLevelScreen } from '../screen'


import { AccountScreen } from '../screen'
import { AccountDetailScreen } from '../screen'

const EmployeeStack = createStackNavigator({
    Employee: {
        screen: EmployeeTab,
    },
    CreateEmployee: {
        screen: CreateEmployeeScreen
    },
    DetailEmployee: {
        screen: DetailEmloyeeScreen
    }
})

// EmployeeStack.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//     return ({
//         tabBarLabel: ({ focused }) => focused ? <Text >Nhân viên</Text> : null,
//         tabBarVisible,
//     })
// };

const WageStack = createStackNavigator({
    WageList: {
        screen: WageListScreen
    },
    CreateWage: {
        screen: CreateWageScreen
    },
    DetailWage: {
        screen: DetailWageScreen
    },
})

const PositionStack = createStackNavigator({
    PostionList: {
        screen: PositionListScreen
    },
    CreatePosition: {
        screen: CreatePositionScreen
    },
    DetailPosition: {
        screen: DetailPositionScreen
    },
})

const LevelStack = createStackNavigator({
    LevelList: {
        screen: LevelListScreen
    },
    CreateLevel: {
        screen: CreateLevelScreen
    },
    DetailLevel: {
        screen: DetailLevelScreen
    },
})

const AccountStack = createStackNavigator({
    Account: {
        screen: AccountScreen,
    },
    AccountDetail: {
        screen: AccountDetailScreen
    }
})

export default createBottomTabNavigator({
    EmployeeStack: EmployeeStack,
    WageStack:  WageStack,
    PositionStack: PositionStack,
    LevelStack: LevelStack,
    AccountStack: AccountStack,
})