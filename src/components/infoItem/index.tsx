import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'



export function ItemList() {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.info}>alvesjonatas99@gmail.com</Text>
            </View>
            <View style={styles.Hr} />
        </View>


    )
}