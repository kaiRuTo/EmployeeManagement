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

import { SearchBar } from '../component'
import NavigationService from '../../route/NavigationService'
import { nhanvienApi } from '../../api'
const { width, height } = Dimensions.get('window')

import { nameOfNhanVienReducers } from '../../reducers'
import { nhanVienActions } from '../../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const BLUE_COLOR = '#007894'

class EmployeeListTab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [
                { 'HoTen': 'Nguyễn Quốc An', 'position': '16520012' },
                { 'HoTen': 'Nguyễn Khánh Duy', 'position': '16520295' },
                { 'HoTen': 'Lưu Hoàng Hiệp', 'position': '16520379' }
            ],
            searchText: '',
            searchFilter: [],
            isLoading: false,
        }
    }

    componentDidMount = () => {
        this.loadData()
    }

    loadData = () => {
        this.setState({ isLoading: true }, () => {
            nhanvienApi.getListItem()
                .then(list => {
                    this.setState({
                        employees: list.nv,
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

    renderItem = ({ item, index }) => {
        if (index === 0)
            return (
                <View style={[styles.AddingCard]}>
                    <TouchableOpacity style={[styles.displayInlineBlock, styles.add,]}
                        onPress={() => {
                            NavigationService.navigate('CreateEmployee')
                        }}>
                        <Text style={{ color: BLUE_COLOR, fontSize: 16, fontWeight: 'bold' }}>Thêm nhân viên</Text>
                    </TouchableOpacity>
                </View>
            )
        return (
            <TouchableOpacity
                onPress={() => {
                    NavigationService.navigate('DetailEmployee', {
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
                        <Text style ={{color: 'black'}}>{item.HoTen}</Text>
                        <Text style ={{color: '#A4A4A4'}}>{item.MaPB}</Text>
                        <View />
                    </View>
                </View>
            </TouchableOpacity >
        )
    }

    searchFilterFunction = text => {
        const newData = this.state.employees.filter(item => {
            const itemData = `${item.HoTen.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        console.log(newData)
        this.setState({ searchFilter: newData });
    };

    render() {
        const { searchText, employees, searchFilter } = this.state
        console.log(this.state)
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
                    data={(searchText != '') ? [{ none: 0 }, ...searchFilter] : [{ none: 0 }, ...employees]}
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

const mapStateToProps = (state, ownProps) => {
    return {
        ...state[nameOfNhanVienReducers]
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(nhanVienActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListTab)