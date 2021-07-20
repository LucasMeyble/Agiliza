import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, ScrollView, TextInput } from 'react-native';

import { backingIcon, nextIcon  } from "../../assets/icons";
import { InputRegister } from '../../components/InputRegister';
import { ButtonRegister } from '../../components/buttonRegister';
import { Logo } from '../../components/logo';
import { styles } from './styles';



export function RegisterS4({ navigation }: any) {

    return (
        <ScrollView>
            <View>
                <SafeAreaView>
                    <KeyboardAvoidingView>
                        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                                <>
                                    <View style={styles.logoContainer}>
                                        <Logo />
                                    </View>

                                    <View style={styles.titleContainer}>
                                        <Text style={styles.title}>{`Etapa 2/2\nNós conte sobre você`}</Text>
                                    </View>

                                    <View style={styles.subTitleContainer}>
                                        <Text style={styles.subTitle}>Dados Profissionais</Text>
                                    </View>
                                    <View style={styles.containerInputRegister}>
                                        <View style={styles.containerRegister}> 
                                        <TextInput
                                            style={styles.input}
                                            
                                        />
                                        </View>
                                    </View>

                                    < View style={styles.button}>
                                            <ButtonRegister  icon={backingIcon} onPress={() => {navigation.navigate('RegisterS3')}}/>
                                            <ButtonRegister  icon={nextIcon} onPress={() => {navigation.navigate('Home')}}/>
                                    </ View>
                                </>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View >
        </ScrollView>
    )
}