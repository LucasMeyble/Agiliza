import React from "react";
import { View, TouchableOpacity, Text, ImageSourcePropType, Image } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type Props = {
    icon: ImageSourcePropType,
}

export function ButtonRegister({ icon }: Props) {
    return (
        <View >
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Image style={styles.image} source={icon} />
            </TouchableOpacity>
        </View>


    )
}