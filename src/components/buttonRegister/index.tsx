import React from "react";
import { View, TouchableOpacity, Text, ImageSourcePropType, Image, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type Props = TouchableOpacityProps & {
    icon: ImageSourcePropType,
}

export function ButtonRegister({ icon, ...rest }: Props) {
    return (
        <View >
            <TouchableOpacity style={styles.button} {...rest}>
                <Image style={styles.image} source={icon} />
            </TouchableOpacity>
        </View>


    )
}