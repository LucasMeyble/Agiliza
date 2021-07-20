import React, { useState, useEffect } from "react";
import { View, Text, Button, Modal, Alert } from "react-native";
import { ModalSearch } from "../../components/modalSearch"; 
import { useFocusEffect } from "@react-navigation/native";

import { styles } from './style';

export function Search({ navigation }: any) {

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
                    <ModalSearch navigation={navigation} setModalVisible={setModalVisible} modalVisible={modalVisible} />
                </Modal>
            </View>
        </>

    )
}