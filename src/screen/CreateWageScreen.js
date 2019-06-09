import React, { Component } from 'react';
import {
    View,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Text,
    TextInput,
    Dimensions
} from 'react-native';

import { FormInput } from './component'
import { luongApi } from '../api'
const { width, height } = Dimensions.get('window')

class CreateWageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            BacLuong: '',
            LuongCB: '',
            img: '',
            HSPhuCap: '',
            password: '',
            confirm: '',
            HSLuong: '',
            chuyenNganh: '',
            trinhDo: '',
            noiDaoTao: '',
            bangCap: ''
        };
    }

    // static navigationOptions = {
    //     headerTitle: this.props.navigation.getParam(NameHeader, 'Thêm')
    // };

    componentDidMount = () => {
        this.setState({
            isEdit: this.props.navigation.getParam('isEdit', false)
        }, () => {
            if (this.state.isEdit)
                luongApi.detailItem(this.props.navigation.getParam('id'))
                    .then(wages => {
                        this.setState({
                            ...this.state,
                            BacLuong: wages[0].BacLuong.toString(),
                            LuongCB: wages[0].LuongCB.toString(),
                            HSLuong: wages[0].HSLuong.toString(),
                            HSPhuCap:wages[0].HSPhuCap.toString(),
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
        })
    }

    createWage() {
        luongApi.createItem({
            BacLuong: parseInt(this.state.BacLuong),
            LuongCB: parseInt(this.state.LuongCB),
            HSLuong: parseFloat(this.state.HSLuong),
            HSPhuCap: parseFloat(this.state.HSPhuCap),
        })
            .then(wage => {
                this.props.navigation.goBack()

            })
            .catch(error => {
                console.log(error)
            })
    }

    uploadWage() {
        luongApi.updateItem({
            _id: this.props.navigation.getParam('id'),
            BacLuong: parseInt(this.state.BacLuong),
            LuongCB: parseInt(this.state.LuongCB),
            HSLuong: parseFloat(this.state.HSLuong),
            HSPhuCap: parseFloat(this.state.HSPhuCap),
        })
            .then(wage => {
                this.props.navigation.navigate('WageList')

            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { lastName, BacLuong, LuongCB, img, HSPhuCap, HSLuong, password, confirm,
            chuyenNganh,
            trinhDo,
            noiDaoTao,
            bangCap } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { paddingTop: 10 }]}>
                    <View style={styles.containerBody}>
                        <View style={styles.displayInlineBlock}>
                            <View style={{ width: '50%' }}>
                                <FormInput
                                    line
                                    label={'Lương'}
                                    textBox
                                    require
                                    onChangeText={(text) => this.setState({ BacLuong: text })}
                                    value={BacLuong}
                                    placeholder={'Tên lương...'}
                                //errorMessage={!BacLuong || BacLuong == '' ? null : (validateName(BacLuong) ? null : 'Tên không hợp lệ')}
                                />
                            </View>
                        </View>
                        <FormInput
                            line
                            label={'Lương cơ bản'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ LuongCB: text })}
                            value={LuongCB}
                            placeholder={'Nhập lương cơ bản...'}
                        />
                        <FormInput
                            line
                            label={'Hệ số lương'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ HSLuong: text })}
                            value={HSLuong}
                            placeholder={'Nhập hệ số lương...'}
                        //errorMessage={!HSLuong || HSLuong == '' ? null : (validateSpecialKey(HSLuong) ? null : 'Tên tài khoản không chứa ký tự đặc biệt')}
                        />
                        <FormInput
                            line
                            label={'Hệ số phụ cấp'}
                            textBox
                            require
                            keyboardType={'number-pad'}
                            onChangeText={(text) => this.setState({ HSPhuCap: text })}
                            value={HSPhuCap}
                            placeholder={'Hệ số phụ cấp...'}
                        //errorMessage={!HSPhuCap || HSPhuCap == '' ? null : (validateHSPhuCapNumber(HSPhuCap) ? null : 'Số điện thoại không hợp lệ')}
                        />
                        <View style={[styles.form, styles.formSubmit]}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (this.props.navigation.getParam('isEdit', false))
                                        this.uploadWage()
                                    else this.createWage()
                                }}
                            >
                                <Text>Thêm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: Colors.bg,
    },
    displayInlineBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    containerBody: {
        flex: 1,
        //backgroundColor: Colors.bg,
        paddingLeft: 20,
        paddingRight: 20,
    },
    imageCard: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.15,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    text: {
        // fontSize: FontStyle.mdText,
        // fontFamily: FontStyle.mainFont,
        // color: Colors.darkText,
        textAlign: 'center',
        lineHeight: 17,
        marginTop: 3,
    },
    form: {
        marginTop: 30,
    },
    formSubmit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 22,
    },
});

export default CreateWageScreen