import React from "react";
import { View, Text, Button, ImageBackground, ScrollView } from "react-native";
import { background } from "../../assets/images";
import { ItemList } from "../../components/infoItem";

import { styles } from './style';

const image = { uri: "https://reactjs.org/logo-og.png" };

export function Profile({ navigation }: any) {
    return (


        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.headerUser}>
                        <Text style={styles.title}>Jônatas Alves</Text>
                        <Text style={styles.subtitle}>Software Engineer</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Dados Pessoais</Text>
                        </View>

                        <ItemList />
                        <ItemList />
                        <ItemList />
                        <ItemList />

                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Dados Profissionais</Text>
                        </View>

                        <ItemList />
                        <ItemList />
                        <ItemList />
                        <ItemList />
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    )
}