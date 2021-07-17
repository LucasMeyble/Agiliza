import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TextInput, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { styles } from "./style";


export function CardService() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatarImage}
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4',
                    }} />
                <View style={styles.infoUser}>
                    <Text style={styles.titleUser}>Jônatas Alves</Text>
                    <Text style={styles.descriptionUser}>Desenvolvedor de software</Text>
                    <Text style={styles.time}>1m</Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleService}>Titulo</Text>
                <Text style={styles.messageService}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate mi vel ornare suscipit. In commodo ante id lectus dictum, non tempus quam interdum. Suspendisse ac tincidunt felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at ligula eu erat scelerisque viverra. Nunc sit amet aliquet tellus. Ut quis eros luctus, pretium libero non, aliquam urna. Praesent bibendum urna vel pulvinar convallis. Etiam varius egestas vestibulum. Cras vitae convallis dui. Morbi eu volutpat lacus, ut ornare nisi. Proin commodo, est sit amet.</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text>Concorrer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text>Concorrer</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}