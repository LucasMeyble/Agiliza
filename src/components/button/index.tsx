import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type Props = {
    title: string,
}

export function Button({ title }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>


    )
}