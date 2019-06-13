import React from 'react'
import { ScrollView, StyleSheet, View, Platform, Image, Text, SafeAreaView, StatusBar, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import NavigationService from '../route/NavigationService'

import { ButtonOutline } from './component'
const { width, height } = Dimensions.get('window')
import { phongbanApi } from '../api'
import _ from 'lodash'

class DetailPositionScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TenPB: 'Name',
            image: 'https://firebasestorage.googleapis.com/v0/b/HairSalon-beauty-app.appspot.com/o/Images%2Favocado-face-mask.jpg?alt=media&token=5bb4d5a4-924e-420f-a044-f7dd3a998622',
            position: 'position',
            nhanvien: []
        };
    }

    static navigationOptions = {
        headerRight:
            <Feather
                name={'menu'}
                size={20}
                style={{ marginRight: 15 }}
                onPress={() => {
                    NavigationService.navigate('CreatePosition', {
                        'NameHeader': 'Chỉnh sửa',
                        'isEdit': true
                    })
                }}
            />
    };

    componentWillMount() {
        console.log('EmployeeDetailScreen will mount')
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        phongbanApi.detailItem(this.props.navigation.getParam('id'))
            .then(res => {
                this.setState({
                    ...this.state,
                    ...res.pb[0],
                    nhanvien: [
                        ...res.nv
                    ]
                })
            })
            .catch(error => {
                console.log(error)
            })
    }



    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    NavigationService.navigate('DetailEmployee', {
                        id: item._id
                    })
                }}
                style={{ alignSelf: 'center' }}
            >
                <View style={[styles.displayInlineBlock, styles.card]}>
                    {/* <Image 
                        source = {require('')}
                    /> */}
                    <View style={{ flex: 1, height: '100%', justifyContent: 'space-between' }}>
                        <View />
                        <Text>{item.HoTen}</Text>
                        <Text>{item.MaPB}</Text>
                        <View />
                    </View>
                </View>
            </TouchableOpacity >
        )
    }


    render() {
        const {
            id = '',
            TenPB = '',
            DiaChi = '',
            SDTPB = '',
            nhanvien
        } = this.state
        const { image } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <View style={styles.containerBody}>
                        <View style={styles.containerInfoAvatar}  >
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                {/* <UserAvatar /> */}
                                <Text style={[styles.text, styles.textBold, { color: 'black' }]}>
                                    {`${TenPB || 'Phòng ban'}`}
                                </Text>
                            </View>
                        </View>
                        <Text style={[styles.text, styles.textBold, { alignSelf: 'center', marginTop: 0, marginBottom: 0 }]}>
                            Thông tin cơ bản
                        </Text>
                        <View style={styles.containerInfo}>
                            <Text style={styles.text}>
                                Địa chỉ: {DiaChi || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Số điện thoại: {SDTPB || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                        </View>
                        {!_.isEmpty(nhanvien) && <Text style={[styles.text, styles.textBold, { alignSelf: 'center', marginTop: 0, marginBottom: 0 }]}>
                            Danh sách nhân viên
                        </Text>}
                        <FlatList
                            contentContainerStyle={{ padding: 10 }}
                            data={[...nhanvien]}
                            keyExtractor={(item, index) => `${index}`}
                            renderItem={this.renderItem}
                        />
                        <View style={[styles.containerBody, styles.displayInlineBlock, {justifyContent: 'space-around'}]}>
                            <ButtonOutline
                                width='40%'
                                label={'CHỈNH SỬA'}
                                onPress={() => {
                                    NavigationService.navigate('CreatePosition', {
                                        'NameHeader': 'Chỉnh sửa',
                                        'isEdit': true,
                                        'id': this.state._id
                                    })
                                }}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
    },
    displayInlineBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    card: {
        width: width * 0.9,
        height: 70,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
})

export default DetailPositionScreen