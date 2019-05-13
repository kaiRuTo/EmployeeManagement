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

class CreateWageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            displayName: '',
            basicSalary: '',
            img: '',
            levelSalary: '',
            password: '',
            confirm: '',
            coefficientSalary: '',
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
        this.setState( {
            isEdit: this.props.navigation.getParam('isEdit', false)
        })
    }

    createEmployee() {

    }


    render() {
        const { lastName, displayName, basicSalary, img, levelSalary, coefficientSalary, password, confirm,
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
                                    onChangeText={(text) => this.setState({ displayName: text })}
                                    value={displayName}
                                    placeholder={'Tên lương...'}
                                //errorMessage={!displayName || displayName == '' ? null : (validateName(displayName) ? null : 'Tên không hợp lệ')}
                                />
                            </View>
                        </View>
                        <FormInput
                            line
                            label={'Lương cơ bản'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ basicSalary: text })}
                            value={basicSalary}
                            placeholder={'Nhập lương cơ bản...'}
                        />
                        <FormInput
                            line
                            label={'Hệ số lương'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ coefficientSalary: text })}
                            value={coefficientSalary}
                            placeholder={'Nhập hệ số lương...'}
                        //errorMessage={!coefficientSalary || coefficientSalary == '' ? null : (validateSpecialKey(coefficientSalary) ? null : 'Tên tài khoản không chứa ký tự đặc biệt')}
                        />
                        <FormInput
                            line
                            label={'Bậc lương'}
                            textBox
                            require
                            keyboardType={'phone-pad'}
                            onChangeText={(text) => this.setState({ levelSalary: text })}
                            value={levelSalary}
                            placeholder={'Nhập bậc lương...'}
                        //errorMessage={!levelSalary || levelSalary == '' ? null : (validatelevelSalaryNumber(levelSalary) ? null : 'Số điện thoại không hợp lệ')}
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

export default CreateWageScreen