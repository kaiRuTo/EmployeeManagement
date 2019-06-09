import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image, Platform, Button } from 'react-native';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window')

export default class PopUpInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal
                isVisible={this.props.isVisible}
                animationIn='slideInUp'
                animationOut='slideOutDown'
                onBackdropPress={this.props.onBackdropPress || this.props.pressCancel}
                style={[styles.modalStyle, { top: '25%', left: '7.5%' }, this.props.style]}
                {...this.props}>
                {this.props.children ||
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <Text >
                            {this.props.title}
                        </Text>
                        <TextInput style={[styles.formInput, { marginTop: height * 0.02 }]}
                            onChangeText={this.props.onChangeText}
                            value={this.props.value}
                            placeholder={this.props.placeholder}
                            secureTextEntry={this.props.secureTextEntry}
                            autoFocus />
                        {this.props.Second && <TextInput style={[styles.formInput, { marginTop: height * 0.02 }]}
                            onChangeText={this.props.onChangeTextSecond}
                            value={this.props.valueSecond}
                            placeholder={this.props.placeholderSecond}
                            secureTextEntry={this.props.secureTextEntrySecond} />}
                        <View style={[styles.displayInlineBlock, { justifyContent: 'space-around', width: '100%' }]}>
                            <TouchableOpacity style={[styles.recordRow]} onPress={this.props.pressCancel}>
                                <View style={[styles.displayInlineBlock, { alignItems: 'center' }]}>
                                    <Text style={[styles.textBold, { textAlign: 'center', fontWeight: 'normal', marginLeft: 5 }]}>HỦY BỎ</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.recordRow]} onPress={this.props.pressSubmit}>
                                <View style={[styles.displayInlineBlock, { alignItems: 'center' }]}>
                                    <Text style={[styles.textBold, { textAlign: 'center', fontWeight: 'normal', marginLeft: 5 }]}>{String(this.props.content).toUpperCase()}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalStyle: {
        position: 'absolute',
        width: width * 0.75,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    displayInlineBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    formInput: {
        height: 40,
        width: width * 0.65,
        borderWidth: 1,
        paddingBottom: 10,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 6.2,
    },
    recordRow: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
})