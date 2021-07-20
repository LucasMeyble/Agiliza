import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { cameraIcon, closeIcon, EmailIcon, EmailIconPng, galeryIcon, moreIcon, videoCamIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'

type Props = {
    modalVisible: boolean,
    setModalVisible: (visible: boolean) => void,
    navigation: any,
}



export function ModalSearch({ setModalVisible, modalVisible, navigation }: Props) {

    const handleClose = () => {
        setModalVisible(false);
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleClose}>
                    <Image style={styles.icon} source={closeIcon} />
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder={"Search"}/>
                </View>
            </View>

            <View style={styles.content}>
                
            </View>
        </View >


    )
}