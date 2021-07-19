import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import { workIcon, searchBlueIcon } from "../../assets/icons";
import { ButtonChoose } from '../../components/buttonChoose';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS2({ navigation }: any) {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <>
                            <View style={styles.imageContainer}>
                                <Logo />
                            </View>
                            <Text style={styles.title}>O que você deseja fazer?</Text>
                            <View >
                                <ButtonChoose title={"Sou um profissional"} icon={workIcon} onPress={() => { navigation.navigate('RegisterS3') }} />
                                <ButtonChoose title={"Estou a procura de um profissional"} icon={searchBlueIcon} onPress={() => { navigation.navigate('Home') }} />
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )

}