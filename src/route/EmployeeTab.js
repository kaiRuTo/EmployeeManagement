import React from 'react'
import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createAppContainer
} from 'react-navigation';

import { TabScreen } from '../screen'

const COLOR_TEXT = '#3B3B3B'
const COLOR_BACKGROUND = '#FFFFFF'
const COLOR_INDICATOR = '#00A3BB'


const EmployeeTab = createMaterialTopTabNavigator({
    EmployeeListTab: {
        screen: TabScreen.EmployeeListTab,
        navigationOptions: {
            tabBarLabel: 'Danh sách',
            tabBarOptions: {
                showLabel: true,
                upperCaseLabel: false,
                inactiveTintcolor: COLOR_TEXT,
                activeTintcolor: COLOR_TEXT,
                indicatorStyle: {
                    backgroundColor: COLOR_INDICATOR,
                    height: 3
                },
                labelStyle: {
                    fontWeight: 'bold',
                    color: COLOR_TEXT,
                },
                style: {
                    backgroundColor: COLOR_BACKGROUND,
                }
            },
        }
    },
    IdealTab: {
        screen: TabScreen.IdealListTab,
        navigationOptions: {
            tabBarLabel: 'Đề xuất',
            tabBarOptions: {
                showLabel: true,
                upperCaseLabel: false,
                inactiveTintcolor: COLOR_TEXT,
                activeTintcolor: COLOR_TEXT,
                indicatorStyle: {
                    backgroundColor: COLOR_INDICATOR,
                    height: 3
                },
                labelStyle: {
                    fontWeight: 'bold',
                    color: COLOR_TEXT,
                },
                style: {
                    backgroundColor: COLOR_BACKGROUND,
                }
            },
        }
    },
}, {
        lazy: true
    })

export default createAppContainer(EmployeeTab);