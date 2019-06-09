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
import _, { get } from 'lodash'
import { FormInput, PopUpInput } from './component'
import { nhanvienApi, chucvuApi, phongbanApi, trinhdohocvanApi, luongApi } from '../api'


const { width, height } = Dimensions.get('window')

class CreateEmployeeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            HoTen: '',
            NgaySinh: Moment(),
            position: '',
            DanToc: '',
            QueQuan: '',
            img: '',
            email: '',
            SoDienThoai: '',
            Password: '',
            confirm: '',
            Username: '',
            MaCV: '',
            MaPB: '',
            MaTDHV: '',
            BacLuong: '',
            listCV: [],
            listPB: [],
            listTDHV: [],
            listBacLuong: [],
            isDateTimePickerVisible: false,
            textChucVuInput: '',
            isChucVuPopupInputVisible: false,
            textTrinhDoInput: '',
            textChuyenNganhInput: '',
            isTrinhDoPopupInputVisible: false
        };
    }

    componentDidMount = () => {
        this.loadCV()
        this.loadPhongBan()
        this.loadTrinhdohocvan()
        this.loadBacluong()
        if (this.props.navigation.getParam('isEdit', false))
            this.loadNhanView()
        this.setState({
            "HoTen":"Kid",
            "NgaySinh":"2019-06-08T23:28:49.356Z",
            "SoDienThoai":"0943052884",
            "QueQuan":"Dong Thap",
            "GioiTinh":"Nam",
            "DanToc":"Kinh",
            "Username":"Kid1",
        })
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

    loadNhanView = () => {
        nhanvienApi.detailItem(this.props.navigation.getParam('id'))
            .then(list => {
                this.setState({
                    ...this.state,
                    ...list[0]
                }, () => {
                    this.setState({
                        MaCV: get(_.filter(this.state.listCV, function (item) { return item._id === this.state.MaCV })[0], 'TenCV'),
                        MaPB: get(_.filter(this.state.listPB, function (item) { return item._id === this.state.MaPB })[0], 'TenPB'),
                        MaTDHV: get(_.filter(this.state.listTDHV, function (item) { return item._id === this.state.MaTDHV })[0], 'TenTDHV'),
                        BacLuong: get(_.filter(this.state.listBacLuong, function (item) { return item._id === this.state.BacLuong })[0], 'LuongCB'),
                    })
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

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

    _toggleChucVuPopupInput = () => this.setState({ isChucVuPopupInputVisible: !this.state.isChucVuPopupInputVisible });

    _toggleTrinhDoPopupInput = () => this.setState({ isTrinhDoPopupInputVisible: !this.state.isTrinhDoPopupInputVisible });

    createChucVu = (chucVu) => {
        chucvuApi.createItem({
            HoTen: this.state.HoTen,
        })
            .then(nv => {
                this.loadCV()

            })
            .catch(error => {
                console.log(error)
            })
    }

    createTrinhDo = (trinhDo) => {
        trinhdohocvanApi.createItem({

        })
            .then(nv => {
                this.loadTrinhdohocvan()

            })
            .catch(error => {
                console.log(error)
            })
    }

    createEmployee = () => {
        const { MaCV, MaPB, MaTDHV, BacLuong } = this.state
        nhanvienApi.createItem({
            HoTen: this.state.HoTen,
            NgaySinh: this.state.NgaySinh,
            // position: this.state.position,
            SoDienThoai: this.state.SoDienThoai,
            QueQuan: this.state.QueQuan,
            GioiTinh: 'Nam',
            DanToc: this.state.DanToc,
            Password: this.state.Password,
            Username: this.state.Username,
            MaCV: get(_.filter(this.state.listCV, function (item) { return item.TenCV === MaCV })[0], '_id'),
            MaPB: get(_.filter(this.state.listPB, function (item) { return item.TenPB === MaPB })[0], '_id'),
            MaTDHV: get(_.filter(this.state.listTDHV, function (item) { return item.TenTDHV === MaTDHV })[0], '_id'),
            BacLuong: get(_.filter(this.state.listBacLuong, function (item) { return item.LuongCB === parseInt(BacLuong) })[0], '_id'),
        })
            .then(nv => {
                //this.props.navigation.goBack()
                console.log(nv)
                this.props.navigation.navigate('CreateLaborContract', {
                    'id': nv._id
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    updateEmployee = () => {
        nhanvienApi.updateItem({
            _id: this.state._id,
            HoTen: this.state.HoTen,
            NgaySinh: this.state.NgaySinh,
            position: this.state.position,
            SoDienThoai: this.state.SoDienThoai,
            QueQuan: this.state.QueQuan,
            GioiTinh: 'Nam',
            DanToc: this.state.DanToc,
            Password: this.state.Password,
            Username: this.state.Username,
            MaCV: this.state.MaCV,
            MaPB: this.state.MaPB,
            MaTDHV: this.state.MaTDHV,
            BacLuong: parseInt(this.state.BacLuong)
        })
            .then(nv => {
                this.props.navigation.navigate('Employee')
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        const { lastName, HoTen, email, position, img, SoDienThoai, Username, Password, confirm,
            NgaySinh,
            QueQuan,
            DanToc,
            MaCV,
            MaPB,
            MaTDHV,
            BacLuong } = this.state;
        console.log(this.state)
        console.log(_.filter(this.state.listBacLuong, function (item) { return item.LuongCB === parseInt(BacLuong) }))
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
                                    onChangeText={(text) => this.setState({ HoTen: text })}
                                    value={HoTen}
                                    placeholder={'Tên nhân viên...'}
                                //errorMessage={!HoTen || HoTen == '' ? null : (validateName(HoTen) ? null : 'Tên không hợp lệ')}
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
                            label={'Tên tài khoản'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ Username: text })}
                            value={Username}
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
                                    onChangeText={(text) => this.setState({ Password: text })}
                                    value={Password}
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
                        <View style={[styles.displayInlineBlock, { height: 40, alignItems: 'center', width: '100%' }]}>
                            <Dropdown
                                label='Chức vụ'
                                data={_.map(this.state.listCV, function (item) {
                                    return { 'value': item.TenCV }
                                })}
                                containerStyle={{ width: '80%' }}
                                value={MaCV}
                                onChangeText={(text) => {
                                    this.setState({
                                        MaCV: text,
                                    })
                                }}
                            />
                            <TouchableOpacity
                                style={{ width: '20%', paddingTop: 20 }}
                                onPress={() => {
                                    this._toggleChucVuPopupInput()
                                }}
                            >
                                <Text>Thêm</Text>
                            </TouchableOpacity>
                        </View>
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
                        <View style={[styles.displayInlineBlock, { height: 40, alignItems: 'center', width: '100%' }]}>
                            <Dropdown
                                label='Trình độ học vấn'
                                data={_.map(this.state.listTDHV, function (item) {
                                    return { 'value': item.TenTDHV }
                                })}
                                containerStyle={{ width: '80%' }}
                                value={MaTDHV}
                                onChangeText={(text) => {
                                    this.setState({
                                        MaTDHV: text,
                                    })
                                }}
                            />
                            <TouchableOpacity
                                style={{ width: '20%', paddingTop: 20 }}
                                onPress={() => {
                                    this._toggleTrinhDoPopupInput()
                                }}
                            >
                                <Text>Thêm</Text>
                            </TouchableOpacity>
                        </View>
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
                                    if (this.props.navigation.getParam('isEdit', false))
                                        this.updateEmployee()
                                    else this.createEmployee()
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
                <PopUpInput
                    isVisible={this.state.isChucVuPopupInputVisible}
                    title={'Thêm chức vụ'}
                    onChangeText={(text) => this.setState({ textChucVuInput: text })}
                    value={this.state.ChucVu}
                    placeholder={'Tên chức vụ...'}
                    submitDisabled={!this.state.ChucVu}
                    pressSubmit={() => this.createChucVu(this.state.ChucVu)}
                    content={'Thêm'}
                    pressCancel={this._toggleChucVuPopupInput}
                />
                <PopUpInput
                    isVisible={this.state.isTrinhDoPopupInputVisible}
                    Second
                    title={'Thêm trình độ học vấn'}
                    value={this.state.textTrinhDoInput}
                    placeholder={'Tên trình độ học vấn...'}
                    onChangeText={(text) => this.setState({ textTrinhDoInput: text })}
                    valueSecond={this.state.textChuyenNganhInput}
                    placeholderSecond={'Tên chuyên ngành...'}
                    onChangeTextSecond={(text) => this.setState({ textChuyenNganhInput: text })}
                    submitDisabled={!this.state.textTrinhDoInput}
                    pressSubmit={() => this.createTrinhDo(this.state.textTrinhDoInput)}
                    content={'Thêm'}
                    pressCancel={this._toggleTrinhDoPopupInput}
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