import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type props = {
    label: string,
    value: string,
}

export function ItemList({ label, value }: props) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.info}>{value}</Text>
            </View>
            <View style={styles.Hr} />
        </View>


    )
}