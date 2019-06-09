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
    Dimensions,
    Text
} from 'react-native';

import DateTimePicker from 'react-native-modal-datetime-picker'
import Moment from 'moment'
import { Dropdown } from 'react-native-material-dropdown'

import { FormInput } from './component'
import {  hopdonglaodongApi } from '../api'

const { width, height } = Dimensions.get('window')

class CreateLaborContract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            fromDate: '',
            img: '',
            toDate: '',
            seletedLoaiHopDong: '',
            loaiHopDong: [
                { value: 'Ngắn hạn' },
                { value: 'Dài hạn' }
            ],

            isFromDateDateTimePickerVisible: false,
            isToDateDateTimePickerVisible: false
        };
    }

    static navigationOptions = {
        header: null
    };

    createLaborContract() {
        hopdonglaodongApi.createItem({
            'MaNV': this.props.navigation.getParam('id'),
            'LoaiHD': this.state.seletedLoaiHopDong,
            'fromDate': this.state.fromDate,
            'toDate': this.state.toDate
        })
            .then(nv => {
                this.props.navigation.goBack()
            })
            .catch(error => {
                console.log(error)
            })
    }

    showFromDateDateTimePicker = () => {
        this.setState({ isFromDateDateTimePickerVisible: !this.state.isFromDateDateTimePickerVisible });
    };

    handleFromDateDatePicked = date => {
        this.setState({
            fromDate: date
        });
        this.showFromDateDateTimePicker();
    };

    showToDateDateTimePicker = () => {
        this.setState({ isToDateDateTimePickerVisible: !this.state.isToDateDateTimePickerVisible });
    };

    handleToDateDatePicked = date => {
        this.setState({
            toDate: date
        });
        this.showToDateDateTimePicker();
    };


    render() {
        const { seletedLoaiHopDong,
            fromDate,
            toDate
        } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { paddingTop: 10 }]}>
                    <View style={styles.containerBody}>
                        <Dropdown
                            label='Loại hợp đồng'
                            data={this.state.loaiHopDong}
                            value={seletedLoaiHopDong}
                            onChangeText={(text) => {
                                this.setState({
                                    seletedLoaiHopDong: text,
                                })
                            }}
                        />
                        <FormInput
                            line
                            label={'Từ ngày'}
                            textBox
                            require
                            onFocus={this.showFromDateDateTimePicker}
                            value={Moment(fromDate).format('DD/MM/YYYY')}
                        />
                        <FormInput
                            line
                            label={'Đến ngày'}
                            textBox
                            require
                            onFocus={this.showToDateDateTimePicker}
                            value={Moment(toDate).format('DD/MM/YYYY')}
                        //errorMessage={!phone || phone == '' ? null : (validatephoneNumber(phone) ? null : 'Số điện thoại không hợp lệ')}
                        />
                        <View style={[styles.form, styles.formSubmit]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.createLaborContract()
                                }}
                            >
                                <Text>Thêm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <DateTimePicker
                    isVisible={this.state.isFromDateDateTimePickerVisible}
                    onConfirm={this.handleFromDateDatePicked}
                    onCancel={this.showFromDateDateTimePicker}
                />
                <DateTimePicker
                    isVisible={this.state.isToDateDateTimePickerVisible}
                    onConfirm={this.handleToDateDatePicked}
                    onCancel={this.showToDateDateTimePicker}
                />
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

export default CreateLaborContract