import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { EmailIconPng, LockIconPng } from "../../assets/icons";
import { Input } from '../../components/Input';
import { styles } from './style';

import { theme } from '../../global/styles/theme';

export function Login() {

    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <Input placeHolder={"Digite seu Email"} icon={EmailIconPng} />
                        <Input placeHolder={"Digite sua senha"} icon={LockIconPng} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}