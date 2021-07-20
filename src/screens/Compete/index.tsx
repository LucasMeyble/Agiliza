import React, { useState, useEffect } from "react";
import { View, Text, Button, Modal, Alert } from "react-native";
import { ModalCompete } from "../../components/modalCompete"; 
import { useFocusEffect } from "@react-navigation/native";

import { styles } from './style';

export function Compete({ navigation }: any) {

    useFocusEffect(() => {
        setModalVisible(true);
    })

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        navigation.navigate("Home");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ModalCompete navigation={navigation} setModalVisible={setModalVisible} modalVisible={modalVisible} />
                </Modal>
            </View>
        </>

    )
}