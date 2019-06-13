import React from 'react'
import { ScrollView, StyleSheet, View, Platform, Image, TouchableOpacity, Text, SafeAreaView, StatusBar, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import NavigationService from '../route/NavigationService'

import Moment from 'moment'
const { width, height } = Dimensions.get('window')
import { ButtonOutline } from './component'
import { nhanvienApi } from '../api'

class DetailEmployeeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: 'Name',
            image: 'https://firebasestorage.googleapis.com/v0/b/HairSalon-beauty-app.appspot.com/o/Images%2Favocado-face-mask.jpg?alt=media&token=5bb4d5a4-924e-420f-a044-f7dd3a998622',
            MaCV: 'MaCV',
            hopDong: {}
        };
    }

    static navigationOptions = {
        headerRight:
            <Feather
                name={'menu'}
                size={20}
                style={{ marginRight: 15 }}
                onPress={() => {
                    NavigationService.navigate('CreateEmployee', {
                        'NameHeader': 'Chỉnh sửa',
                        'isEdit': true,
                    })
                }}
            />
    };

    componentWillMount() {
        console.log('DetailEmployeeScreen will mount')
    }

    componentDidMount() {
        this.loadData()
    }

    delete = () => {
        nhanvienApi.deleteItem(this.props.navigation.getParam('id'))
            .then(res => {
                NavigationService.goBack()
            })
            .catch(error => {
                NavigationService.goBack()
            })
    }

    loadData() {
        nhanvienApi.detailItem(this.props.navigation.getParam('id'))
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    ...res.nv[0],
                    hopDong: {
                        ...res.hd[0]
                    }
                }, () => {
                    console.log(this.state)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {
            id = '',
            HoTen = '',
            lastName = '',
            MaCV = '',
            NgaySinh = '',
            DanToc = '',
            userName = '',
            QueQuan = '',
            SoDienThoai = '',
            email = '',
            MaPB = '',
            MaTDHV = '',
            BacLuong = ''
        } = this.state
        const {
            LoaiHD,
            TuNgay,
            DenNgay } = this.state.hopDong
        const { image } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <View style={styles.containerBody}>
                        <View style={styles.containerInfoAvatar}  >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                {/* <UserAvatar /> */}
                                <Text style={[styles.text, styles.textBold, { color: 'black' }]}>
                                    {`${HoTen || 'Tên'}`}
                                </Text>
                                <Text style={styles.text}>
                                    {MaCV || 'Vị trí'}
                                </Text>
                            </View>
                        </View>
                        <Text style={[styles.text, styles.textBold, { alignSelf: 'center', marginTop: 0, marginBottom: 0 }]}>
                            Thông tin cơ bản
                        </Text>
                        <View style={styles.containerInfo}>
                            <Text style={styles.text}>
                                Tài khoản: {userName || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Chức vụ: {MaCV || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Năm sinh: {Moment(NgaySinh).format('DD/MM/YYYY') || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Quê quán: {QueQuan || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Điện thoại: {SoDienThoai || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Dân tộc: {DanToc || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Phòng: {MaPB || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Bậc lương: {BacLuong || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Trình độ học vấn: {MaTDHV || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                        </View>
                        <Text style={[styles.text, styles.textBold, { alignSelf: 'center', marginTop: 0, marginBottom: 0 }]}>
                            Thông tin hợp đồng
                        </Text>
                        <View style={styles.containerInfo}>
                            <Text style={styles.text}>
                                Loại hợp đồng: {LoaiHD || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Từ ngày: {Moment(TuNgay).format('DD/MM/YYYY') || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Đến ngày: {Moment(DenNgay).format('DD/MM/YYYY') || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                        </View>
                        <View style={[styles.containerBody, styles.displayInlineBlock, { justifyContent: 'space-around' }]}>
                            <ButtonOutline
                                width='40%'
                                backgroundColor={'red'}
                                label={'XOÁ'}
                                disable={false}
                                style={{ borderWidth: 0 }}
                                onPress={() => {
                                    this.delete()
                                }}
                            />
                            <ButtonOutline
                                width='40%'
                                label={'CHỈNH SỬA'}
                                onPress={() => {
                                    NavigationService.navigate('CreateEmployee', {
                                        'NameHeader': 'Chỉnh sửa',
                                        'isEdit': true,
                                        'id': this.state._id
                                    })
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        color: 'black',
        marginTop: 5,
        marginBottom: 5,
    },
    textBold: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 2,
    },
    containerBody: {
        alignSelf: 'center',
        width: width * 0.95,
        alignItems: 'center',
    },
    displayInlineBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    containerInfoAvatar: {
        width: width * 0.9,
        marginVertical: width * 0.05,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3,
    },
    containerInfo: {
        backgroundColor: 'black',
        width: width * 0.9,
        marginVertical: width * 0.05,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3,
    }
})

export default DetailEmployeeScreen