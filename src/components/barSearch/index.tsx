import React from "react";
import { View, TouchableOpacity, Text, TextInput, Image, TouchableOpacityProps } from "react-native";
import { styles } from "./style";
import { searchIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'


export function Search({...rest}: TouchableOpacityProps) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Image style={styles.icon} source={searchIcon} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Search</Text>
            </View>
        </TouchableOpacity>


    )
}