import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

export const ButtonOutline = (props) => {
    const {
      style,
        onPress,
        labelStyle,
        label,
        width,
        backgroundColor,
        md,
        disable = false
    } = props
    return (
        <TouchableOpacity
            style={[styles.btnOutline, {
                backgroundColor: !disable ? backgroundColor || 'transparent' : '#A1A1A1',
                width: width || '100%', borderRadius: md ? 4 : 20
            }, style]}
            onPress={() => {
                console.log(onPress)
                if (!disable)
                    return onPress()
            }}>
            <Text style={[{
                fontSize: 16,
                color: !disable ? (backgroundColor != 'red' ? '#007894' : 'white') : 'white', fontWeight: 'bold'
            },
                labelStyle]}>{String(label).toUpperCase() || 'THÊM'}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    btnOutline: {
        height: 40,
        borderColor: '#007894',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    btnText: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
})