import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const { width, height } = Dimensions.get('window')


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { onSearch, onClear, value } = this.props;
        return (
            <View style={{ marginLeft: width * 0.03, }}>
                <TextInput style={[styles.formInput, this.props.inputStyle]}
                    {...this.props}
                    value={value}
                    placeholder={!this.props.placeholder ? 'Tìm kiếm' : this.props.placeholder}
                />
                {!value ?
                    <TouchableOpacity onPress={onSearch} style={styles.searchIcon}>
                        <FontAwesome5 name={'search'} size={18} color={'black'} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onClear} style={styles.searchIcon}>
                        <FontAwesome5 name={'times'} size={18} color={'black'} />
                    </TouchableOpacity>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formInput: {
        height: 40,
        paddingBottom: 10,
        paddingLeft: 15,
        fontSize: 14,
        color: 'black',
        borderRadius: 10,
        width: width * 0.925,
        marginBottom: 15,
    },
    searchIcon: {
        position: 'absolute',
        top: '22%',
        right: '7%',
    },
})

export default SearchBar
