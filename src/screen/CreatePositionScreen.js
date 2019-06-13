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

import { ButtonOutline } from './component'
import { FormInput } from './component'
import { phongbanApi } from '../api'
import { validate } from '../helper'

const { width, height } = Dimensions.get('window')

class CreatePositionScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TenPB: '',
            DiaChi: '',
            SDTPB: ''
        };
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount = () => {
        if (this.props.navigation.getParam('isEdit', false))
            this.loadPosition()
    }

    createPosition() {
        phongbanApi.createItem({
            TenPB: this.state.TenPB,
            DiaChi: this.state.DiaChi,
            SDTPB: this.state.SDTPB
        })
            .then(nv => {
                this.props.navigation.goBack()
            })
            .catch(error => {
                console.log(error)
            })
    }

    updatePosition() {
        phongbanApi.updateItem({
            _id: this.props.navigation.getParam('id'),
            TenPB: this.state.TenPB,
            DiaChi: this.state.DiaChi,
            SDTPB: this.state.SDTPB
        })
            .then(nv => {
                this.props.navigation.navigate('PostionList')
            })
            .catch(error => {
                console.log(error)
            })
    }

    loadPosition = () => {
        phongbanApi.detailItem(this.props.navigation.getParam('id'))
            .then(position => {
                this.setState({
                    ...this.state,
                    ...position.pb[0]
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { TenPB, DiaChi, SDTPB } = this.state;
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
                                    onChangeText={(text) => this.setState({ TenPB: text })}
                                    value={TenPB}
                                    placeholder={'Tên phòng...'}
                                    errorMessage={!TenPB || TenPB == '' ? null : (validate.validateName(TenPB) ? null : 'Tên không hợp lệ')}
                                />
                            </View>
                        </View>
                        <FormInput
                            line
                            label={'Địa chỉ'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ DiaChi: text })}
                            value={DiaChi}
                            placeholder={'Nhập địa chỉ...'}
                        />
                        <FormInput
                            line
                            label={'Số điện thoại'}
                            textBox
                            require
                            keyboardType={'phone-pad'}
                            onChangeText={(text) => this.setState({ SDTPB: text })}
                            value={SDTPB}
                            placeholder={'Nhập điện thoại...'}
                            errorMessage={!SDTPB || SDTPB == '' ? null : (validate.validatePhoneNumber(SDTPB) ? null : 'Số điện thoại không hợp lệ')}
                        />
                        <View style={[styles.form, styles.formSubmit]}>
                            <ButtonOutline
                                width='50%'
                                disable={
                                    !validate.validatePhoneNumber(SDTPB) ||
                                    !validate.validateName(TenPB) ||
                                    DiaChi == ''
                                }
                                label={this.props.navigation.getParam('isEdit', false) ? 'CHỈNH SỬA' : 'THÊM'}
                                onPress={() => {
                                    if (this.props.navigation.getParam('isEdit', false))
                                        this.updatePosition()
                                    else this.createPosition()
                                }}
                            />
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