import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from 'react-native';

import { EmailIconPng, facebookIcon, googleIcon, linkedinIcon, LockIconPng } from "../../assets/icons";
import { Button } from '../../components/button';
import { ButtonIcon } from '../../components/buttonIcon';
import { Input } from '../../components/Input';
import { Logo } from '../../components/logo';
import { styles } from './style';

export function Login({navigation}: any) {

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <>
                            <View style={styles.imageContainer}>
                                <Logo />
                            </View>
                            <Text style={styles.title}>Seja bem vindo!</Text>
                            <Text style={styles.subTitle}>Logue com sua conta</Text>
                            <View >
                                <Input placeHolder={"Digite seu Email"} icon={EmailIconPng} />
                                <Input placeHolder={"Digite sua senha"} icon={LockIconPng} />
                                <Button title={"Login"} />
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
                            <TouchableOpacity style={styles.viewSignOut} onPress={() => {navigation.navigate('Register')}}>
                                <Text style={styles.signOut}>Faça seu cadastro!</Text>
                            </TouchableOpacity>
                        </>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View >
    )

}