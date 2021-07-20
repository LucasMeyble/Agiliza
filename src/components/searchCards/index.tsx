import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TextInput, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ButtonCardChoice } from '../buttonCardChoice';


export function SearchCards() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatarImage}
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4',
                    }} />
                <View style={styles.infoUser}>
                    <Text style={styles.titleUser}>Jônatas Alves</Text>
                    <Text style={styles.descriptionUser}>Desenvolvedor de software</Text>
                    <Text style={styles.time}>1m</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleService}>Titulo</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <ButtonCardChoice title={"Concorrer"} color={'#37D086'} />
                </View>
                <View style={styles.button}>
                    <ButtonCardChoice title={"Ver Informações"} color={'#04B1D7'} />
                </View>
            </View>

        </View>
    )
}