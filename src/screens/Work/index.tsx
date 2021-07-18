import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { backIcon, doneIcon, workBlackIcon } from "../../assets/icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { styles } from './style';

export function Work({ navigation }: any) {

    const LeftActions = () => {
        return (
            <TouchableOpacity >
                <View style={styles.buttonAdd}>
                    <Image source={doneIcon} />
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.backgroundImage}>
                    <Image style={styles.avatarImage} source={{ uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4' }} />
                </View>
                <View style={styles.textHeader}>
                    <Text style={styles.title}>Olá, Jônatas</Text>
                    <Text style={styles.subtitle}>Aqui estão alguns jobs para você</Text>
                </View>

            </View>
            <View style={styles.content}>

                <Swipeable renderRightActions={LeftActions}>
                    <View style={styles.button}>
                        <View style={styles.icon}>
                            <Image source={workBlackIcon} />
                        </View>
                        <View>
                            <Text style={styles.titleJob}>Declaração de Imposto de renda</Text>
                        </View>
                    </View>
                </Swipeable>

                <Swipeable renderRightActions={LeftActions}>
                    <View style={styles.button}>
                        <View style={styles.icon}>
                            <Image source={workBlackIcon} />
                        </View>
                        <View>
                            <Text style={styles.titleJob}>Inseção de taxas</Text>
                        </View>
                    </View>
                </Swipeable>

                <Swipeable renderRightActions={LeftActions}>
                    <View style={styles.button}>
                        <View style={styles.icon}>
                            <Image source={workBlackIcon} />
                        </View>
                        <View>
                            <Text style={styles.titleJob}>Abertura de CNPJ</Text>
                        </View>
                    </View>
                </Swipeable>

                <Swipeable renderRightActions={LeftActions}>
                    <View style={styles.button}>
                        <View style={styles.icon}>
                            <Image source={workBlackIcon} />
                        </View>
                        <View>
                            <Text style={styles.titleJob}>Causa trabalhista</Text>
                        </View>
                    </View>
                </Swipeable>
            </View>
        </View>

    )
}