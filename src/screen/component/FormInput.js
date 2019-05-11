import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

const DARK_TEXT = 'black'
const DARK_BLUE = 'rgba(0, 0, 0, .5)'
const BLUE = 'rgba(79, 79, 79, .1)'
const ERROR_TEXT = 'red'

const FONT_MINI = 8
const FONT_SMALL = 12
const FONT_MEDIUM = 16

var FloatingLabel = require('react-native-floating-labels');
class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColor: BLUE,
            borderWidth: 1,
        };
    }

    render() {
        const { borderColor } = this.state;
        return (
            <View style={[styles.form, this.props.formStyle]}>
                {this.props.label && <Text style={styles.formLabel}>
                    {this.props.label} {this.props.require && <Text style={{ color: 'red', fontSize: FONT_SMALL }}>*</Text>}
                </Text>}
                {this.props.textBox &&
                    <View style={{ justifyContent: 'center' }}>
                        <TextInput
                            style={[styles.formInput,
                            { borderWidth: this.props.line ? 0 : 1, borderBottomWidth: 1, borderColor: borderColor },
                            this.props.line && { paddingBottom: -4, paddingLeft: 5, marginTop: -5 },
                            this.props.rightAlign && { textAlign: 'right' },
                            this.props.inputStyle]}
                            onFocus={() => {
                                this.setState({ borderColor: BLUE, borderWidth: 2 });
                            }}
                            onBlur={() => {
                                this.setState({ borderColor: BLUE, borderWidth: 1 });
                            }}
                            {...this.props}
                        />
                        {this.props.errorMessage &&
                            <Text style={[{ color: ERROR_TEXT, fontStyle: 'italic', fontSize: FONT_MINI }, this.props.errorStyle]}>
                                {this.props.errorMessage || 'Lỗi định dạng!'}
                            </Text>
                        }
                        {this.props.notes &&
                            <Text style={[{ color: DARK_BLUE, fontStyle: 'italic', fontSize: FONT_SMALL }, this.props.notes]}>
                                {this.props.notes}
                            </Text>
                        }
                    </View>
                }
                {this.props.dropDown &&
                    <Dropdown
                        {...this.props}
                        fontSize={14}
                        dropdownOffset={{ top: 8, left: 10 }}
                        baseColor='rgba(0,0,0,0)'
                        containerStyle={[styles.containerDropdownStyle, this.props.containerDropdownStyle]}
                    />
                }
                {this.props.richText &&
                    <AutoGrowingTextInput
                        style={[styles.formInput, this.props.inputStyle, {
                            borderWidth: this.props.line ? 0 : 1,
                            borderBottomWidth: 1,
                            borderColor: borderColor,
                            paddingBottom: 5,
                            paddingTop: 5,
                            paddingRight: 5
                        }]}
                        onFocus={() => {
                            this.setState({ borderColor: BLUE, borderWidth: 2 });
                        }}
                        onBlur={() => {
                            this.setState({ borderColor: BLUE, borderWidth: 1 });
                        }}
                        {...this.props} />
                }
                {this.props.children}
                <View style={[styles.rightComponent, this.props.rightComponentStyle]}>
                    {this.props.rightComponent}
                </View>
            </View>
        );
    }
}

class ConfirmCodeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    form: {
        marginTop: 10,
    },
    formLabel: {
        fontSize: FONT_MEDIUM,
        color: DARK_TEXT,
        paddingLeft: 2
    },
    formInput: {
        height: 40,
        borderWidth: 1,
        borderColor: DARK_BLUE,
        paddingBottom: 10,
        paddingLeft: 10,
        color: DARK_TEXT,
        borderRadius: 5,
        marginTop: 3,
        fontSize: FONT_MEDIUM
    },
    rightComponent: {
        position: 'absolute',
        top: '50%',
        right: 8,
        height: '100%',
    },
    containerDropdownStyle: {
        zIndex: -1,
        height: 40,
        borderWidth: 1,
        borderColor: DARK_BLUE,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 6.2,
        position: 'relative'
    },
})

export default FormInput;
export {
    ConfirmCodeInput
}