import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'


interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity
     style={styles.button}
     activeOpacity={0.7}
     {...rest}>
    <Text style={styles.buttonText}>
       {title}
    </Text>
</TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.medium,
        marginBottom: SIZES.xSmall,
        height: 56,
        paddingHorizontal:10
        
    },
    buttonText: {
        color:COLORS.lightWhite,
        fontSize:SIZES.xLarge
    }

})