import React from "react";
import { View, TouchableOpacity, Text, ImageSourcePropType, Image} from "react-native";
import { styles } from "./style";

type Props = {
    title: string,
    icon: ImageSourcePropType
}

export function ButtonChoose({ title, icon }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={ icon }   />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textButton}>{title}</Text>
                </View>
                
            </TouchableOpacity>
        </View>


    )
}