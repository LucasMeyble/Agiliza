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
                            <Text style={styles.titleInfo}>Localização</Text>
                        </View>

                        <ItemList label={"Cidade"} value={"Bezerros - PE"} />

                        <View style={styles.infoUser}>
                            <Text style={styles.titleInfo}>Sobre Jônatas Alves</Text>
                        </View>

                        <View style={styles.about}>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat.
                            </Text>
                        </View>

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