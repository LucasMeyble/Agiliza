import React from "react";
import { View, TouchableOpacity, Text, ImageSourcePropType, Image, TouchableOpacityProps} from "react-native";
import { styles } from "./style";

type Props = TouchableOpacityProps & {
    title: string,
    icon: ImageSourcePropType
}

export function ButtonChoose({ title, icon, ...rest }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} {...rest} >
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