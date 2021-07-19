import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TextInput, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { plusIcon } from "../../assets/icons";
import { styles } from "./style";
import { ButtonRegister } from '../buttonRegister';


export function FirstService({navigation}: any) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>
                Olá, vi que você{'\n'}
                é novo por aqui.{'\n'}

                
            </Text>
            <Text style={styles.text}>
                Requisite um novo serviço
            </Text>
            <View style={styles.button}>
                <ButtonRegister icon={plusIcon} onPress={() => {navigation.navigate('NewCalled')}}/>
            </View>

        </View>
    )
}