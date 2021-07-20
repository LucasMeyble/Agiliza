import React from "react";
import { Image, TextInput, View, ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { closeIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg';
import { SearchCards } from '../searchCards'

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
                <View style={styles.subHeader}>
                    <TouchableOpacity onPress={handleClose}>
                        <Image style={styles.icon} source={closeIcon} />
                    </TouchableOpacity>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder={"Search"}/>
                    </View>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity>
                        <Text>
                            Principais
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Contas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Serviços
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.content}>
                <SearchCards />
                <SearchCards />
            </View>
        </View >


    )
}