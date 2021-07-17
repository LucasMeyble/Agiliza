import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';

import { EmailIconPng, LockIconPng } from "../../assets/icons";
import { Button } from '../../components/button';
import { Input } from '../../components/Input';
import { Logo } from '../../components/logo';
import { styles } from './style';

export function Login() {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>

                        <>
                            <Logo />
                            <Text style={styles.title}>Seja bem vindo!</Text>
                            <Text style={styles.subTitle}>Logue com sua conta</Text>
                            <View >
                                <Input placeHolder={"Digite seu Email"} icon={EmailIconPng} />
                                <Input placeHolder={"Digite sua senha"} icon={LockIconPng} />
                                <Button title={"Login"} />
                            </View>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )

}