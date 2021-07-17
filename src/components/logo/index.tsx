import React from "react";
import { Image, TextInput, View, ImageSourcePropType } from "react-native";
import { styles } from "./style";
import { logo } from "../../assets/images";


export function Logo() {
    return (
        <View style={styles.container}>
            <Image source={logo} />
        </View>


    )
}