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



export function ModalCompete({ setModalVisible, modalVisible, navigation }: Props) {

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

            <View style={styles.content}>
                <View style={styles.user}>
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
                <View style={styles.timeContainer}>
                    <View>
                        <Text style={styles.title}>Serviço creado à</Text>
                        <Text style={styles.subTitle}>2:00 Horas</Text>
                    </View>
                    <View >
                        <Text style={styles.title}>Duração</Text>
                        <Text style={styles.subTitle}>4 Dias</Text>
                    </View>
                </View>
                <View style={styles.bodyProject}>
                    <View>
                        <Text style={styles.titleProject}>Titulo do projeto</Text>
                    </View>
                    <View>
                        <Text style={styles.textProject}>
                            Salve salve galera, esse aqui é um post que{'\n'} 
                            ajuda a galera a ter criatividade na hora de escrever texto de exemplo.
                        </Text>
                    </View>
                </View>
                <View style={styles.proposalContainer}>
                    <View>
                        <Text style={styles.titleProposal}>Propostas</Text>
                    </View>
                    <View>
                        <Text style={styles.textProposal}>5 Pessoas se interessaram</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonConfirm title={"Concorrer"} color={'#37D086'} onPress={() => {navigation.navigate('Budget')}}/>
                </View>
            </View>
        </View >
    )
}