import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { backingBlackIcon, chatIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg';
import { SearchCards } from '../searchCards';
import { ButtonConfirm } from '../buttonConfirm';


type Props = {
    modalVisible: boolean,
    setModalVisible: (visible: boolean) => void,
    navigation: any,
}



export function ModalBudget({ setModalVisible, modalVisible, navigation }: Props) {

    const handleClose = () => {
        setModalVisible(false);
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.subHeader}>
                    <TouchableOpacity  onPress={handleClose}>
                        <Image style={styles.icon} source={backingBlackIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.chat} onPress={handleClose}>
                        <Image style={styles.icon} source={chatIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Projeto agiliza</Text>
            </View>

            <View style={styles.itensContainer}>
                <Text style={styles.title}>Orçamento</Text>
                <View style={styles.input}>
                    <TextInput style={styles.txtInput}></TextInput>
                </View>
            </View>

            <View style={styles.itensContainer}>
                <Text style={styles.title}>Data prevista para entregar</Text>
                <View style={styles.input}>
                    <TextInput style={styles.txtInput}></TextInput>
                </View>
            </View>

            <View style={styles.itensContainer}>
                <Text style={styles.title}>Detalhes</Text>
                <View style={styles.inputDetails}>
                    <TextInput style={styles.txtInput} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                    <ButtonConfirm title={"Enviar Proposta"} color={'#37D086'} onPress={() => {navigation.navigate('Home')}}/>
                </View>
        </View >
    )
}