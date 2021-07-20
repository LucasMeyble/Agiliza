import React from "react";
import { View, TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    title: string,
    color: string
}

export function ButtonConfirm({ title, color, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, {backgroundColor: color}]} {...rest}>
                <Text style={styles.textButton}>{title}</Text>
            </TouchableOpacity>
        </View>


    )
}