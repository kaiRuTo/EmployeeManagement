import React from 'react'
import { ScrollView, StyleSheet, View, Platform, Image, Text, SafeAreaView, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import NavigationService from '../route/NavigationService'

import { ButtonOutline } from './component'
import numeral from 'numeral'
const { width, height } = Dimensions.get('window')
import { luongApi } from '../api'

class EmployeeDetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BacLuong: 'Name',
            image: 'https://firebasestorage.googleapis.com/v0/b/HairSalon-beauty-app.appspot.com/o/Images%2Favocado-face-mask.jpg?alt=media&token=5bb4d5a4-924e-420f-a044-f7dd3a998622',
            position: 'position',
        };
    }

    static navigationOptions = {
        headerRight:
            <Feather
                name={'menu'}
                size={20}
                style={{ marginRight: 15 }}
                onPress={() => {
                    NavigationService.navigate('CreateWage', {
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

    loadData = () => {
        luongApi.detailItem(this.props.navigation.getParam('id'))
            .then(position => {
                this.setState({
                    ...this.state,
                    ...position[0]
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {
            BacLuong = '',
            HSLuong = '',
            LuongCB = '',
            HSPhuCap = '',
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
                                    Bậc lương {`${BacLuong || 'Lương'}`}
                                </Text>
                            </View>
                        </View>
                        <Text style={[styles.text, styles.textBold, { alignSelf: 'center', marginTop: 0, marginBottom: 0 }]}>
                            Thông tin cơ bản
                        </Text>
                        <View style={styles.containerInfo}>
                            <Text style={styles.text}>
                                Lương cơ bản: {numeral(LuongCB).format('0,0') || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Hệ số lương: {HSLuong || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                            <Text style={styles.text}>
                                Hệ số phụ cấp: {HSPhuCap || <Text style={{ fontStyle: 'italic' }}>(Chưa cập nhật)</Text>}
                            </Text>
                        </View>
                        <View style={[styles.containerBody, styles.displayInlineBlock, { justifyContent: 'space-around' }]}>
                            <ButtonOutline
                                width='40%'
                                label={'CHỈNH SỬA'}
                                onPress={() => {
                                    NavigationService.navigate('CreateWage', {
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

export default EmployeeDetailScreen