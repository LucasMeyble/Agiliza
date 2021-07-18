import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import { workIcon, nextIcon  } from "../../assets/icons";
import { InputRegister } from '../../components/InputRegister';
import { ButtonRegister } from '../../components/buttonRegister';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS4() {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                            <>
                                <Logo />
                                <Text style={styles.title}>{`Por favor\n Complemente seu cadastro\n2/3`}</Text>
                                <Text style={styles.subTitle}>Dados Profissionais</Text>
                                <View style={styles.containerRegister}> 
                                    <InputRegister  placeHolder={"Estado"}  />
                                </View>
                                <View style={styles.containerRegister}>
                                    <InputRegister placeHolder={"Cidade"}  />
                                </View>
                                <View style={styles.containerRegister}>
                                    <InputRegister placeHolder={"Bairro"}  />
                                </View>
                                < View style={styles.button}>
                                         <ButtonRegister  icon={nextIcon}/>
                                </ View>
                            </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )
}