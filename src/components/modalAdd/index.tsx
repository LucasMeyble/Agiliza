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



export function ModalAdd({ setModalVisible, modalVisible, navigation }: Props) {

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
                <Text style={styles.titleModal}>Compartilhar serviço</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.headerContent}>
                    <Image style={styles.image} source={{ uri: "https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4" }} />

                    <View style={styles.butons} >
                        <TouchableOpacity>
                            <View style={styles.buttonRas}>
                                <Text style={styles.textRas}>Salvar como rascunho</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buttonPub}>
                                <Text style={styles.textPub}>Publicar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TextInput
                    style={styles.inputTitle}
                    placeholder={"Digite seu Titulo"}
                />
                <TextInput
                    multiline
                    style={styles.inputMensage}
                    placeholder={"O que você está precisando"}
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Image style={styles.iconBottom} source={cameraIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconBottom} source={videoCamIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconBottom} source={galeryIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconMore} source={moreIcon} />
                </TouchableOpacity>
            </View>
        </View >


    )
}