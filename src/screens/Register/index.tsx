import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView } from 'react-native';

import { EmailIconPng, facebookIcon, googleIcon, linkedinIcon, LockIconPng, profileIcon  } from "../../assets/icons";
import { Button } from '../../components/button';
import { ButtonIcon } from '../../components/buttonIcon';
import { Input } from '../../components/Input';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function Register() {

    return (
        <View style={styles.container}>
            
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <ScrollView>
                            <>
                                <Logo />
                                <Text style={styles.title}>Cadastro</Text>
                                <Text style={styles.subTitle}>Faça seu cadastro para continuar</Text>
                                <View >
                                    <Input placeHolder={"Digite seu nome"} icon={profileIcon} />
                                    <Input placeHolder={"Digite sua email"} icon={EmailIconPng} />
                                    <Input placeHolder={"Digite sua senha"} icon={LockIconPng} />
                                    <Input placeHolder={"Digite sua senha novamente"} icon={LockIconPng} />
                                    <Button title={"Cadastrar"} />
                                </View>
                                <View style={styles.Hr}>
                                    <View style={styles.background}>
                                        <Text>Ou se preferir </Text>
                                    </View>
                                </View>
                                <View style={styles.viewButtons}>
                                    <ButtonIcon icon={googleIcon} />
                                    <ButtonIcon icon={facebookIcon} />
                                    <ButtonIcon icon={linkedinIcon} />
                                </View>
                                <View style={styles.viewSignOut}>
                                    <Text style={styles.signOut}>Faça seu cadastro!</Text>
                                </View>
                            </>
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
     
        </View >
    )

}