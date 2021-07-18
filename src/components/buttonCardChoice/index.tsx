import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

type Props = {
    title: string,
    color: string
}

export function ButtonCardChoice({ title, color }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={() => { }}>
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>


    )
}