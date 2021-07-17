import React from "react";
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { styles } from "./style";
import { searchIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'


export function Search() {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={searchIcon} />
            <TextInput
                style={styles.input}
                placeholder={"Search"}
            />
        </View>


    )
}