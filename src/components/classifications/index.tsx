import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text } from "react-native";
import { styles } from "./style";
import { EmailIcon, EmailIconPng, starIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type props = {

}

export function Classifications() {
    return (
        <View style={styles.container}>



            <View style={styles.comment}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.nameClassification}>Thiago Gouvêa</Text>
                        <Text >16/06/2021</Text>
                    </View>

                    <View style={styles.star}>
                        <Image style={styles.star} source={starIcon} />
                        <Image style={styles.star} source={starIcon} />
                        <Image style={styles.star} source={starIcon} />
                        <Image style={styles.star} source={starIcon} />
                        <Image style={styles.star} source={starIcon} />
                    </View>
                </View>
                <View>
                    <Text style={styles.textClassification}>Trabalho muito bom! Fiz minha abertura de cnpj
                        com ele no prazo tudo foi resolvido.</Text>
                </View>


            </View>
            <View style={styles.Hr} />
        </View>


    )
}