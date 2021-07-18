import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import { workIcon, nextIcon  } from "../../assets/icons";
import { InputRegister } from '../../components/InputRegister';
import { ButtonRegister } from '../../components/buttonRegister';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS4({ navigation }: any) {

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
                                    <Text style={styles.title}>{`Por favor\n Complemente seu cadastro\n2/3`}</Text>
                                </View>

                                <View style={styles.subTitleContainer}>
                                    <Text style={styles.subTitle}>Dados Profissionais</Text>
                                </View>
                                <View style={styles.containerInputRegister}>
                                    <View style={styles.containerRegister}> 
                                        <InputRegister  placeHolder={"Profissão"}  />
                                    </View>
                                    <View style={styles.containerRegister}>
                                        <InputRegister placeHolder={"Anos de Exp."}  />
                                    </View>
                                    <View style={styles.containerRegister}>
                                        <InputRegister placeHolder={"Empresa"}  />
                                    </View>
                                </View>
                                
                                < View style={styles.button}>
                                         <ButtonRegister  icon={nextIcon} onPress={() => {navigation.navigate('RegisterS5')}}/>
                                </ View>
                            </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )
}