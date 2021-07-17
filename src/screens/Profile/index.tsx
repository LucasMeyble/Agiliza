import React from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { background } from "../../assets/images";

import { styles } from './style';

const image = { uri: "https://reactjs.org/logo-og.png" };

export function Profile({ navigation }: any) {
    return (


        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View style={styles.content}>

                </View>

            </View>
        </ImageBackground>
    )
}