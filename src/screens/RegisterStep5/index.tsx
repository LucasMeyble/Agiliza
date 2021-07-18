import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import {  plusIcon, uploadIcon  } from "../../assets/icons";
import { InputRegister } from '../../components/InputRegister';
import { ButtonRegister } from '../../components/buttonRegister';
import { Button } from '../../components/button';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS5({ navigation }: any) {

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
                                    <Text style={styles.title}>{`Por favor\n Complemente seu cadastro\n3/3`}</Text>
                                </View>

                                <View style={styles.subTitleContainer}>
                                    <Text style={styles.subTitle}>Qualificações</Text>
                                </View>
                                <View style={styles.containerRegister}> 
                                    <InputRegister icon={uploadIcon} placeHolder={"Adicione aqui suas\n competências e/ou certificados"}  />
                                </View>
                                < View style={styles.button}>
                                         <ButtonRegister  icon={plusIcon}/>
                                </ View>
                                < View style={styles.buttonRegister}>
                                     <Button title={"Concluir Cadastro"} onPress={() => {navigation.navigate('Home')}}/>
                                </ View>

                            </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )
}