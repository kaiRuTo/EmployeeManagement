import React, { Component } from 'react';
import {
    View,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    TextInput,
    Dimensions
} from 'react-native';

import { FormInput } from './component'

const { width, height } = Dimensions.get('window')

class CreateEmployeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            position: '',
            img: '',
            email: '',
            phone: '',
            password: '',
            confirm: '',
            userName: '',
            chuyenNganh: '',
            trinhDo: '',
            noiDaoTao: '',
            bangCap: ''
        };
    }

    static navigationOptions = {
        header: null
    };

    createEmployee() {

    }


    render() {
        const { lastName, firstName, email, position, img, phone, userName, password, confirm,
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
                                    label={'Họ & Tên'}
                                    textBox
                                    require
                                    onChangeText={(text) => this.setState({ firstName: text })}
                                    value={firstName}
                                    placeholder={'Tên nhân viên...'}
                                    //errorMessage={!firstName || firstName == '' ? null : (validateName(firstName) ? null : 'Tên không hợp lệ')}
                                />
                            </View>
                        </View>
                        <FormInput
                            line
                            label={'Phòng ban'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ position: text })}
                            value={position}
                            placeholder={'Nhập chức vụ...'}
                        />
                        <FormInput
                            line
                            label={'Tên tài khoản'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ userName: text })}
                            value={userName}
                            placeholder={'Nhập tên tài khoản...'}
                            //errorMessage={!userName || userName == '' ? null : (validateSpecialKey(userName) ? null : 'Tên tài khoản không chứa ký tự đặc biệt')}
                        />
                        <View style={styles.displayInlineBlock}>
                            <View style={{ width: '50%' }}>
                                <FormInput
                                    line
                                    label={'Mật khẩu'}
                                    textBox
                                    require
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ password: text })}
                                    value={password}
                                    placeholder={'Nhập mật khẩu...'} />
                            </View>
                            <View style={{ width: '50%' }}>
                                <FormInput
                                    line
                                    label={'Xác nhận'}
                                    textBox
                                    require
                                    secureTextEntry
                                    onChangeText={(text) => this.setState({ confirm: text })}
                                    value={confirm}
                                    placeholder={'Xác nhận mật khẩu...'}
                                    //errorMessage={!confirm || confirm == '' ? null : (confirmPassword(password, confirm) ? null : 'Mật khẩu xác nhận chưa trùng khớp')}
                                />
                            </View>
                        </View>
                        <FormInput
                            line
                            label={'Số điện thoại'}
                            textBox
                            require
                            keyboardType={'phone-pad'}
                            onChangeText={(text) => this.setState({ phone: text })}
                            value={phone}
                            placeholder={'Nhập số điện thoại...'}
                            //errorMessage={!phone || phone == '' ? null : (validatePhoneNumber(phone) ? null : 'Số điện thoại không hợp lệ')}
                        />
                        <FormInput
                            line
                            require
                            label={'Email'}
                            textBox
                            keyboardType={'email-address'}
                            onChangeText={(text) => this.setState({ email: text })}
                            value={email}
                            placeholder={'Nhập địa chỉ email'}
                            //errorMessage={!email || email == '' ? null : (validateEmail(email) ? null : 'Email không hợp lệ')}
                        />
                        <FormInput
                            line
                            label={'Chuyên ngành'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ chuyenNganh: text })}
                            value={chuyenNganh}
                            placeholder={'Nhập chuyên ngành...'}
                        />
                        <FormInput
                            line
                            label={'Trình đô'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ trinhDo: text })}
                            value={trinhDo}
                            placeholder={'Nhập trình độ...'}
                        />
                        <FormInput
                            line
                            label={'Nơi đào tạo'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ noiDaoTao: text })}
                            value={noiDaoTao}
                            placeholder={'Nhập nơi đào tạo...'}
                        />
                        <FormInput
                            line
                            label={'Bằng cấp'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ bangCap: text })}
                            value={bangCap}
                            placeholder={'Nhập bằng cấp...'}
                        />

                        

                        <View style={[styles.form, styles.formSubmit]}>

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

export default CreateEmployeeScreen