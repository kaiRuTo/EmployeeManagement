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

import { FormInput } from './component'
import { chucvuApi } from '../api'
const { width, height } = Dimensions.get('window')

class CreateChucVuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaCV: '',
            TenCV: '',
        };
    }

    // static navigationOptions = {
    //     headerTitle: this.props.navigation.getParam(NameHeader, 'Thêm')
    // };

    componentDidMount = () => {
        this.setState({
            isEdit: this.props.navigation.getParam('isEdit', false)
        })
    }

    createChucVu() {
        chucvuApi.createItem({
            MaCV: this.state.MaCV,
            TenCV: this.state.TenCV
        })
            .then(wage => {
                this.props.navigation.goBack()

            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { MaCV, TenCV } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { paddingTop: 10 }]}>
                    <View style={styles.containerBody}>
                        <View style={styles.displayInlineBlock}>
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
                        <FormInput
                            line
                            label={'Lương cơ bản'}
                            textBox
                            require
                            onChangeText={(text) => this.setState({ TenCV: text })}
                            value={TenCV}
                            placeholder={'Nhập lương cơ bản...'}
                        />
                        <View style={[styles.form, styles.formSubmit]}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.createChucVu()
                                }}
                            >
                                <Text>Thêm</Text>
                            </TouchableOpacity>
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

export default CreateChucVuScreen