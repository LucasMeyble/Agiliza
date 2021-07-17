import React from "react";
import { View, Text, Button, ImageBackground, ScrollView, Image } from "react-native";
import { background } from "../../assets/images";
import { Classifications } from "../../components/classifications";
import { ItemList } from "../../components/infoItem";
import { ItemCertificated } from "../../components/itemCertificated";

import { styles } from './style';

const image = { uri: "https://reactjs.org/logo-og.png" };

export function Profile({ navigation }: any) {
    return (


        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <ScrollView>
                <View style={styles.container}>


                    <View style={styles.content}>

                        <View style={styles.headerUser}>
                            <View style={styles.background} >
                                <Image style={styles.avatarImage} source={{ uri: "https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4" }} />

                            </View>
                            <Text style={styles.title}>Jônatas Alves</Text>
                            <Text style={styles.subtitle}>Software Engineer</Text>
                        </View>

                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Dados Pessoais</Text>
                        </View>

                        <ItemList label={"Email"} value={"alvesjonatas99@gmail.com"} />
                        <ItemList label={"Telefone"} value={"(81) 99252-8586"} />
                        <ItemList label={"Endereço"} value={"Rua Inácia Maria de Arruda"} />
                        <ItemList label={"Cidade"} value={"Bezerros - PE"} />

                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Dados Profissionais</Text>
                        </View>

                        <ItemList label={"Profissão"} value={"Software Engineer"} />
                        <ItemList label={"Anos Exp."} value={"3 Anos"} />
                        <ItemList label={"Empresa"} value={"Adasi Software"} />

                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Certificações</Text>
                        </View>

                        <ItemCertificated label={"IBM"} value={"Data Science"} number={"nº 1516151515151"} />
                        <ItemCertificated label={"RocketSeat"} value={"React Native"} number={"nº 1516151515151"} />

                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Classificações</Text>
                        </View>

                        <Classifications />
                        <Classifications />
                    </View>
                </View>
            </ScrollView>
        </ImageBackground >
    )
}