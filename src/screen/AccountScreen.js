import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    RefreshControl,
    ScrollView,
    Platform,
    StatusBar,
    FlatList,
    TouchableOpacity,
    Text,
    Dimensions,
    Linking,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
const {width, height} = Dimensions.get('window')

class AccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            openSwithStore: false,
            isVisibleLogout: false,
            isVisibleSendFeedback: false,
            isVisibleReportIssue: false,
            isLike: false,
            isDislike: false,
            loginRequired: false,
        };
    }


    componentDidMount() {
        this.loadData()
    }

    loadData = () => {

    }

    renderLogout = () => {
        return (
            <View style={{
                marginVertical: 10, alignItems: 'center', width: width
            }}>
                <TouchableOpacity style={[styles.displayInlineBlock, { height: 30, justifyContent: 'center', marginVertical: 10 }]}>
                    <View style={[{ width: '10%', }]}>
                        <View style={[{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }]}>
                            <AntDesign name={'poweroff'} size={20} color={'white'} />
                        </View>
                    </View>
                    <View style={[{ width: '70%', height: 30, justifyContent: 'center' }]}>
                        <Text style={styles.text}>Đăng xuất</Text>
                    </View>
                    <View style={[{ width: '15%', height: 30, justifyContent: 'center', alignItems: 'flex-end' }]}>

                    </View>
                </TouchableOpacity>
            </View >
        )
    }

    _toggleLogout = () => this.setState({ isVisibleLogout: !this.state.isVisibleLogout });

    render() {
        console.log(this.props)
        const { user } = this.props;
        const { isLike, isDislike, isVisibleLogout, isVisibleReportIssue, isVisibleSendFeedback, openSwithStore } = this.state;
        if (this.props.isLoading)
            return (
                <Loading />
            )
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 20, alignItems: 'center'
                    }}>
                    {this.renderLogout()}
                </ScrollView>
            </SafeAreaView >
        );
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
    text: {
        color: 'black'
    },
    accountHeader: {
        justifyContent: 'center',
        height: 100,
        marginTop: -24,
        borderBottomWidth: 1,
    },
    storeRecord: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1
    },
    dropdownBlock: {
        position: 'absolute',
        bottom: 60,
        width: width * 0.9,
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    feedBackBlock: {
        position: 'absolute',
        top: '35%',
        width: width * 0.9,
        borderRadius: 10,
        padding: 15,
    },
    likeButton: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        maxWidth: '90%',
        marginVertical: 3,
    },
    address: {
        maxWidth: '90%'
    },
});


export default AccountScreen