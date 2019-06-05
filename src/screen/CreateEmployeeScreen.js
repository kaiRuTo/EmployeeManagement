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
import DateTimePicker from 'react-native-modal-datetime-picker'
import Moment from 'moment'
import { Dropdown } from 'react-native-material-dropdown'
import _ from 'lodash'
import { FormInput } from './component'
import { nhanvienApi, chucvuApi, phongbanApi, trinhdohocvanApi, luongApi } from '../api'


const { width, height } = Dimensions.get('window')

class CreateEmployeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            NgaySinh: '',
            position: '',
            DanToc: '',
            QueQuan: '',
            img: '',
            email: '',
            SoDienThoai: '',
            password: '',
            confirm: '',
            userName: '',
            MaCV: '',
            MaPB: '',
            MaTDHV: '',
            BacLuong: '',
            listCV: [],
            listPB: [],
            listTDHV: [],
            listBacLuong: [],
            isDateTimePickerVisible: false
        };
    }

    componentDidMount = () => {
        this.loadCV()
        this.loadPhongBan()
        this.loadTrinhdohocvan()
        this.loadBacluong()
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: !this.state.isDateTimePickerVisible });
    };

    handleDatePicked = date => {
        this.setState({
            NgaySinh: date
        });
        this.showDateTimePicker();
    };

    static navigationOptions = {
        header: null
    };

    loadCV = () => {
        chucvuApi.getListItem()
            .then(list => {
                this.setState({
                    listCV: list
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    loadPhongBan = () => {
        phongbanApi.getListItem()
            .then(list => {
                this.setState({
                    listPB: list
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    loadTrinhdohocvan = () => {
        trinhdohocvanApi.getListItem()
            .then(list => {
                this.setState({
                    listTDHV: list
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    loadBacluong = () => {
        luongApi.getListItem()
            .then(list => {
                this.setState({
                    listBacLuong: list
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    createEmployee() {
        nhanvienApi.createItem({
            MaNV: 2,
            HoTen: this.state.firstName,
            NgaySinh: this.state.NgaySinh,
            // position: this.state.position,
            SoDienThoai: this.state.SoDienThoai,
            QueQuan: this.state.QueQuan,
            GioiTinh: 'Nam',
            DanToc: this.state.DanToc,
            // password: this.state.password,
            // userName: this.state.userName,
            MaCV: this.state.MaCV,
            MaPB: this.state.MaPB,
            MaTDHV: this.state.MaTDHV,
            BacLuong: parseInt(this.state.BacLuong)
        })
            .then(nv => {
                this.props.navigation.goBack()

            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        const { lastName, firstName, email, position, img, SoDienThoai, userName, password, confirm,
            NgaySinh,
            QueQuan,
            DanToc,
            MaCV,
            MaPB,
            MaTDHV,
            BacLuong } = this.state;
        console.log(this.state)
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
                            label={'Ngày sinh'}
                            textBox
                            require
                            onFocus={this.showDateTimePicker}
                            value={Moment(NgaySinh).format('DD/MM/YYYY')}
                            placeholder={'Nhập chức vụ...'}
                        />
                        <FormInput
                            line
                            label={'Quê Quán'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ QueQuan: text })}
                            value={QueQuan}
                            placeholder={'Nhập quê quán...'}
                        />
                        <FormInput
                            line
                            label={'Dân tộc'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ DanToc: text })}
                            value={DanToc}
                            placeholder={'Nhập dân tộc...'}
                        />
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
                            onChangeText={(text) => this.setState({ SoDienThoai: text })}
                            value={SoDienThoai}
                            placeholder={'Nhập số điện thoại...'}
                        //errorMessage={!phone || phone == '' ? null : (validatePhoneNumber(phone) ? null : 'Số điện thoại không hợp lệ')}
                        />

                        <Dropdown
                            label='Chức vụ'
                            data={_.map(this.state.listCV, function (item) {
                                return { 'value': item.TenCV }
                            })}
                            value={MaCV}
                            onChangeText={(text) => {
                                this.setState({
                                    MaCV: text,
                                })
                            }}
                        />
                        <Dropdown
                            label='Phòng ban'
                            data={_.map(this.state.listPB, function (item) {
                                return { 'value': item.TenPB }
                            })}
                            value={MaPB}
                            onChangeText={(text) => {
                                this.setState({
                                    MaPB: text,
                                })
                            }}
                        />
                        <Dropdown
                            label='Trình độ học vấn'
                            data={_.map(this.state.listTDHV, function (item) {
                                return { 'value': item.TenTDHV }
                            })}
                            value={MaTDHV}
                            onChangeText={(text) => {
                                this.setState({
                                    MaTDHV: text,
                                })
                            }}
                        />
                        <Dropdown
                            label='Bậc lương'
                            data={_.map(this.state.listBacLuong, function (item) {
                                return { 'value': item.LuongCB }
                            })}
                            value={BacLuong}
                            onChangeText={(text) => {
                                this.setState({
                                    BacLuong: text,
                                })
                            }}
                        />
                        <View style={[styles.form, styles.formSubmit]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.createEmployee()
                                }}
                            >
                                <Text>Thêm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.showDateTimePicker}
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

export default CreateEmployeeScreen