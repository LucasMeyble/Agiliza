import React from "react";
import { Image, TextInput, View, ImageSourcePropType } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type Props = {
    placeHolder: string,
    icon: ImageSourcePropType
}

export function Input({ placeHolder, icon }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={icon} />
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
            />
        </View>


    )
}