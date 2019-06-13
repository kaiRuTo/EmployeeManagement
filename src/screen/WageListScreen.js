import React, { Component } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions,
    RefreshControl
} from 'react-native'

import { SearchBar } from './component'
import NavigationService from '../route/NavigationService'
import { luongApi } from '../api'
const { width, height } = Dimensions.get('window')

const BLUE_COLOR = '#007894'

export default class WageListScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wages: [
                { 'BacLuong': 'Bậc 1', 'LuongCB': '40000' },
                { 'BacLuong': 'Bậc 2', 'LuongCB': '70000' }
            ],
            searchText: '',
            searchFilter: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.loadData()
    }

    loadData = () => {
        this.setState({ isLoading: true }, () => {
            luongApi.getListItem()
                .then(list => {
                    this.setState({
                        wages: list,
                        isLoading: false
                    })
                })
                .catch(error => {
                    this.setState({
                        isLoading: false
                    })
                    console.log(error)
                })
        })
    }

    searchFilterFunction = text => {
        const newData = this.state.wages.filter(item => {
            const itemData = `${item.LuongCB}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        console.log(newData)
        this.setState({ searchFilter: newData });

    };

    renderItem = ({ item, index }) => {
        if (index === 0)
            return (
                <View style={[styles.AddingCard]}>
                    <TouchableOpacity style={[styles.displayInlineBlock, styles.add,]}
                        onPress={() => {
                            NavigationService.navigate('CreateWage')
                        }}>
                        <Text style={{ color: BLUE_COLOR, fontSize: 16, fontWeight: 'bold' }}>Thêm bậc lương</Text>
                    </TouchableOpacity>
                </View>
            )
        return (
            <TouchableOpacity
                onPress={() => {
                    NavigationService.navigate('DetailWage', {
                        id: item._id
                    })
                }}
                style={{ alignSelf: 'center' }}
            >
                <View style={[styles.displayInlineBlock, styles.card]}>
                    {/* <Image 
                        source = {require('')}
                    /> */}
                    <View style={{ flex: 1, height: '100%', justifyContent: 'space-between' }}>
                        <View />
                        <Text style ={{color: 'black'}}>{item.BacLuong}</Text>
                        <Text style ={{color: '#A4A4A4'}}>{item.LuongCB}</Text>
                        <View />
                    </View>
                </View>
            </TouchableOpacity >
        )
    }

    render() {
        const { wages, searchFilter, searchText } = this.state
        return (
            <SafeAreaView style={styles.container}>
                <SearchBar
                    inputStyle={{ backgroundColor: '#FAFAFA' }}
                    onChangeText={(text) => {
                        this.searchFilterFunction(text)
                        this.setState({ searchText: text })
                    }}
                    value={this.state.searchText}
                    onClear={() => this.setState({ searchText: '' })}
                />
                <FlatList
                    refreshControl={
                        <RefreshControl
                            onRefresh={this.loadData}
                            refreshing={this.state.isLoading}
                        />
                    }
                    data={(searchText != '') ? [{ none: 0 }, ...searchFilter] : [{ none: 0 }, ...wages]}
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