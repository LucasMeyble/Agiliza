import React from "react";
import { Image, TextInput, View, ImageSourcePropType } from "react-native";
import { styles } from "./style";

type Props = {
    placeHolder: string,
    icon?: ImageSourcePropType
}

export function InputRegister({ placeHolder, icon }: Props) {

    return (

        <View style={styles.container}>
            {icon ? <Image style={styles.icon} source={icon} /> : null}
            <TextInput
                style={styles.input}
                placeholder={placeHolder}
            />
        </View>


    )
}