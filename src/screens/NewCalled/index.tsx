import React, { useState, useEffect } from "react";
import { View, Text, Button, Modal, Alert } from "react-native";
import { ModalAdd } from "../../components/modalAdd";
import { useFocusEffect } from "@react-navigation/native";

import { styles } from './style';

export function NewCalled({ navigation }: any) {

    useFocusEffect(() => {
        setModalVisible(true);
    })

    const [modalVisible, setModalVisible] = useState(true);

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
                    <ModalAdd setModalVisible={setModalVisible} modalVisible={modalVisible} />
                </Modal>
            </View>
        </>

    )
}