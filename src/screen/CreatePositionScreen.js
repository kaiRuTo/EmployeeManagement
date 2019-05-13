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

class CreatePositionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            displayName: '',
            address: '',
            img: '',
            phone: '',
            password: '',
            confirm: '',
            coefficientSalary: '',
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
        const { lastName, displayName, address, img, phone, coefficientSalary, password, confirm,
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
                                    label={'Phòng'}
                                    textBox
                                    require
                                    onChangeText={(text) => this.setState({ displayName: text })}
                                    value={displayName}
                                    placeholder={'Tên phòng...'}
                                //errorMessage={!displayName || displayName == '' ? null : (validateName(displayName) ? null : 'Tên không hợp lệ')}
                                />
                            </View>
                        </View>
                        <FormInput
                            line
                            label={'Địa chỉ'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ address: text })}
                            value={address}
                            placeholder={'Nhập địa chỉ...'}
                        />
                        <FormInput
                            line
                            label={'Số điện thoại'}
                            textBox
                            require
                            keyboardType={'phone-pad'}
                            onChangeText={(text) => this.setState({ phone: text })}
                            value={phone}
                            placeholder={'Nhập điện thoại...'}
                        //errorMessage={!phone || phone == '' ? null : (validatephoneNumber(phone) ? null : 'Số điện thoại không hợp lệ')}
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

export default CreatePositionScreen