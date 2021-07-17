import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { backIcon } from "../../assets/icons";

import { styles } from './style';

export function Work({ navigation }: any) {
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <Image style={styles.avatarImage} source={{ uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4' }} />
                <View style={styles.textHeader}>
                    <Text style={styles.title}>Olá, Jônatas</Text>
                    <Text style={styles.subtitle}>Aqui estão alguns jobs para você</Text>
                </View>
            </View>
        </View>

    )
}