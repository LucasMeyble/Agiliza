import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type props = {
    label: string,
    value: string,
    number: string,
}

export function ItemCertificated({ label, value, number }: props) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Image style={styles.avatarImage} source={{ uri: "https://i.pinimg.com/originals/74/10/a8/7410a83a6ad2f105ef4eaa0c6ef27aca.jpg" }} />
                <View style={styles.viewInfo}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.info}>{value}</Text>
                </View>
                <View>
                    <Text style={styles.number}>{number}</Text>
                </View>

            </View>
            <View style={styles.Hr} />
        </View>


    )
}