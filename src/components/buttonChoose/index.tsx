import React from "react";
import { View, TouchableOpacity, Text, ImageSourcePropType, Image} from "react-native";
import { styles } from "./style";

type Props = {
    title: string,
    icon: ImageSourcePropType,
    navigation: any
}

export function ButtonChoose({ title, icon, navigation }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Register') }}>
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