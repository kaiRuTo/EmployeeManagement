import React from 'react'
import { Text, StyleSheet } from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

const BLUE_COLOR = '#007894'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import EmployeeTab from './EmployeeTab'

import { CreateEmployeeScreen, TabScreen } from '../screen'
import { DetailEmloyeeScreen } from '../screen'
import { CreateLaborContract } from '../screen'

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

import { StatiticScreen } from '../screen'

const EmployeeStack = createStackNavigator({
    Employee: {
        screen: TabScreen.EmployeeListTab,
    },
    CreateEmployee: {
        screen: CreateEmployeeScreen
    },
    DetailEmployee: {
        screen: DetailEmloyeeScreen
    },
    CreateLaborContract: {
        screen: CreateLaborContract
    }
})

EmployeeStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return ({
        labeled: true,
        tabBarLabel: ({ focused }) => focused ? <Text style={styles.text}>Nhân viên</Text> : null,
        tabBarIcon: ({ focused }) => (
            <FontAwesome
                name='users'
                size={16}
                color={focused ? BLUE_COLOR : '#D4D4D4'}
                focused={focused}
            />
        ),
        tabBarVisible,
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            inactiveTintColor: '#A4A4A4',
            activeTintColor: '#007894',
            inactiveBackgroundColor: 'white',
            activeBackgroundColor: 'white',
            style: {
                paddingVertical: 0,
                borderTopWidth: 1,
                borderTopColor: 'rgba(242,242,242,.5)',
            }
        },
    })
};

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

WageStack.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return ({
        labeled: true,
        tabBarLabel: ({ focused }) => focused ? <Text style={styles.text}>Lương</Text> : null,
        tabBarIcon: ({ focused }) => (
            <FontAwesome
                name='money'
                size={16}
                color={focused ? BLUE_COLOR : '#D4D4D4'}
                focused={focused}
            />
        ),
        tabBarVisible,
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            inactiveTintColor: '#A4A4A4',
            activeTintColor: '#007894',
            inactiveBackgroundColor: 'white',
            activeBackgroundColor: 'white',
            style: {
                paddingVertical: 0,
                borderTopWidth: 1,
                borderTopColor: 'rgba(242,242,242,.5)',
            }
        },
    })
};

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

PositionStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return ({
        labeled: true,
        tabBarLabel: ({ focused }) => focused ? <Text style={styles.text}>Phòng ban</Text> : null,
        tabBarIcon: ({ focused }) => (
            <FontAwesome
                name='group'
                size={16}
                color={focused ? BLUE_COLOR : '#D4D4D4'}
                focused={focused}
            />
        ),
        tabBarVisible,
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            inactiveTintColor: '#A4A4A4',
            activeTintColor: '#007894',
            inactiveBackgroundColor: 'white',
            activeBackgroundColor: 'white',
            style: {
                paddingVertical: 0,
                borderTopWidth: 1,
                borderTopColor: 'rgba(242,242,242,.5)',
            }
        },
    })
};

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

const StatitcStack = createStackNavigator({
    Statitic: {
        screen: StatiticScreen
    }
})

StatitcStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return ({
        labeled: true,
        tabBarLabel: ({ focused }) => focused ? <Text style={styles.text}>Thống kê</Text> : null,
        tabBarIcon: ({ focused }) => (
            <Foundation
                name='graph-pie'
                size={20}
                color={focused ? BLUE_COLOR : '#D4D4D4'}
                focused={focused}
            />
        ),
        tabBarVisible,
        tabBarOptions: {
            showLabel: true,
            upperCaseLabel: true,
            inactiveTintColor: '#A4A4A4',
            activeTintColor: '#007894',
            inactiveBackgroundColor: 'white',
            activeBackgroundColor: 'white',
            style: {
                paddingVertical: 0,
                borderTopWidth: 1,
                borderTopColor: 'rgba(242,242,242,.5)',
            }
        },
    })
};

const AccountStack = createStackNavigator({
    Account: {
        screen: AccountScreen,
    },
    AccountDetail: {
        screen: AccountDetailScreen
    }
})


const styles = StyleSheet.create({
    text: {
        width: '100%',
        textAlign: 'center',
        color: BLUE_COLOR,
    }
})

export default createBottomTabNavigator({
    Employee: EmployeeStack,
    Wage: WageStack,
    Position: PositionStack,
    //LevelStack: LevelStack,
    Statitic: StatitcStack,
    //Account: AccountStack,
})