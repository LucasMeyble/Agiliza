import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import { workIcon, backingIcon, nextIcon  } from "../../assets/icons";
import { ButtonRegister } from '../../components/buttonRegister';
import { InputRegister } from '../../components/InputRegister';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS3({ navigation }: any) {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                            <>
                                <View style={styles.logoContainer}>
                                    <Logo />
                                </View>

                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{`Etapa 1/3\nComplete seu cadastro `}</Text>
                                </View>

                                <View style={styles.subTitleContainer}>
                                    <Text style={styles.subTitle}>Endereço</Text>
                                </View>
                                
                                <View style={styles.inputContainer}> 
                                    <InputRegister placeHolder={"Estado"}  />
                                    <InputRegister placeHolder={"Cidade"}  />
                                </View>
                                < View style={styles.button}>
                                    <ButtonRegister  icon={backingIcon} onPress={() => {navigation.navigate('RegisterS2')}}/>
                                    <ButtonRegister  icon={nextIcon} onPress={() => {navigation.navigate('RegisterS4')}}/>
                                </ View>
                            </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )

}