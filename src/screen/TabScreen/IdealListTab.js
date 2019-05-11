import React, { Component } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class IdealListTab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [
                { 'name': 'Nguyễn Văn A', 'position': 'Designer', title: 'Mẫu quảng cáo mới'},
                { 'name': 'Nguyễn Văn B', 'position': 'Dev', title: 'project bự' }
            ]
        }
    }


    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {

                }}
                style={{ alignSelf: 'center' }}
            >
                <View style={styles.card}>
                    <View style={[styles.displayInlineBlock, { height: '70%'}]}>
                        {/* <Image 
                        source = {require('')}
                    /> */}
                        <View style={{ flex: 1, height: '100%', justifyContent: 'space-between' }}>
                            <Text style = {{paddingBottom: 2}}>{item.title}</Text>
                            <Text>{item.name}</Text>
                            <Text>{item.position}</Text>
                        </View>
                    </View>
                    <View style={{ height: '30%', width: '100%', paddingRight: 10, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <TouchableOpacity
                            onPress={() => {

                            }}
                        >
                            <View>
                                <Text>Xem chi tiết</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const { employees } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={employees}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={this.renderItem}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    displayInlineBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    card: {
        width: width * 0.9,
        height: 100,
        padding: 10,
        backgroundColor: 'white',
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
})