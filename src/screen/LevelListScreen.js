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

import NavigationService from '../route/NavigationService'

const { width, height } = Dimensions.get('window')

const BLUE_COLOR = '#007894'

export default class LevelListScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [
                { 'name': 'Nguyễn Văn A', 'position': 'Designer' },
                { 'name': 'Nguyễn Văn B', 'position': 'Dev' }
            ]
        }
    }

    componentDidMount = () =>{
        this.loadData()
    }

    loadData = () => {

    }

    renderItem = ({ item, index }) => {
        if (index === 0)
            return (
                <View style={[styles.AddingCard]}>
                    <TouchableOpacity style={[styles.displayInlineBlock, styles.add, ]}
                        onPress={()=>{
                            NavigationService.navigate('CreateLevel')
                        }}>
                        <Text style={{ color: BLUE_COLOR, fontSize: 16, fontWeight: 'bold'}}>Thêm trình độ</Text>
                    </TouchableOpacity>
                </View>
            )
        return (
            <TouchableOpacity
                onPress={() => {
                    NavigationService.navigate('DetailEmployee')
                }}
                style={{ alignSelf: 'center' }}
            >
                <View style={[styles.displayInlineBlock, styles.card]}>
                    {/* <Image 
                        source = {require('')}
                    /> */}
                    <View style={{ flex: 1, height: '100%', justifyContent: 'space-between' }}>
                        <View />
                        <Text>{item.name}</Text>
                        <Text>{item.position}</Text>
                        <View />
                    </View>
                </View>
            </TouchableOpacity >
        )
    }

    render() {
        const { employees } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={[{ none: 0 }, ...employees]}
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
        height: 70,
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
        borderColor: BLUE_COLOR,
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