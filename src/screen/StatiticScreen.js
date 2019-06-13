import React from 'react'
import { StyleSheet, View, Text, Dimensions, SafeAreaView } from 'react-native'
import numeral from 'numeral'
import { PieChart } from 'react-native-chart-kit';
import _ from 'lodash'
import { thongKeApi } from '../api'

const { width, height } = Dimensions.get('window')

const serviceColor = [
    // { color: '#F44336', legendFontColor: '#7F7F7F', legendFontSize: 16, },
    // { color: '#E91E63', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    // { color: '#9C27B0', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    // { color: '#673AB7', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    // { color: '#3F51B5', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    // { color: '#2196F3', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    // { color: '#03A9F4', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    // { color: '#00BCD4', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#009688', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#4CAF50', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#8BC34A', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#CDDC39', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#FFEB3B', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#FFC107', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#FF9800', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#FF5722', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#795548', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#9E9E9E', legendFontColor: '#7F7F7F', legendFontSize: 16 },
    { color: '#607D8B', legendFontColor: '#7F7F7F', legendFontSize: 16 },
]

class StatiticScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            employee: [
                { name: 'abc', revenue: 30000 },
                { name: 'abc', revenue: 4000 },
            ]
        }
    }

    componentDidMount = () => {
        thongKeApi.luong()
            .then(res => {
                this.setState({
                    employee: _.map(res, function (item, index) {
                        return { name: item.name, revenue: item.luong }
                    })
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderChar = () => {
        const { employee } = this.state
        const sumAllNow = _.sumBy(employee, 'revenue')
        var lesSumAllNow = sumAllNow
        return (
            <View>
                <PieChart
                    data={_.map(employee.slice(0, 7), function (item, index) {
                        if (index == 6)
                            return {
                                'name': 'Còn lại',
                                'revenue': lesSumAllNow,
                                ...serviceColor[index]
                            }
                        lesSumAllNow -= item.revenue
                        return { ...item, ...serviceColor[index] }
                    })}
                    width={width * 0.85} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: 'white',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(45, 92, 129, ${opacity})`,
                    }}
                    bezier
                    style={{
                        marginBottom: -8,
                    }}
                    accessor="revenue"
                    backgroundColor="transparent"
                    paddingLeft="15"
                />
            </View>
        )
    }

    render() {
        const { total } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>Tổng lương</Text>
                        <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{numeral(_.sumBy(this.state.employee, 'revenue')).format('0,0')} đ</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, }}>Thống kê</Text>
                    </View>
                    {this.renderChar()}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    displayInlineBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    card: {
        width: width * 0.9,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    AddingCard: {
        alignSelf: 'center',
        height: 50,
        width: width * 0.9,
        marginVertical: 5,
        marginTop: 10,
    },
    add: {
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default StatiticScreen