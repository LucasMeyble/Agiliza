import React from "react";
import { View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} {...rest} >
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>


    )
}