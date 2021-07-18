import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import { workIcon, searchBlueIcon  } from "../../assets/icons";
import { InputRegister } from '../../components/InputRegister';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS3() {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                            <>
                                <Logo />
                                <Text style={styles.title}>{`Por favor\n Complemente seu cadastro\n1/3`}</Text>
                                <Text style={styles.subTitle}>Endereço</Text>
                                <View> 
                                    <InputRegister placeHolder={"Estado"}  />
                                    <InputRegister placeHolder={"Cidade"}  />
                                    <InputRegister placeHolder={"Bairro"}  />
                                    <InputRegister placeHolder={"Rua"}  />
                                    <InputRegister placeHolder={"Número"}  />
                                </View>
                            </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
     
        </View >
    )

}