import React from "react";
import { View, TouchableOpacity, Text, ImageSourcePropType, Image } from "react-native";
import { styles } from "./style";
import { chatIcon, EmailIcon, EmailIconPng, searchIcon } from "../../assets/icons";
import { SvgUri } from 'react-native-svg'
import { logo } from "../../assets/images";
import { Search } from "../barSearch";

type Props = {
    url: string,

}

export function Header({ url }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image style={styles.avatarImage}
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/49556955?s=400&u=9c9e1f43d8fb1eca88c3bd81d9719d454c92f081&v=4',
                    }} 
                />
            </View>


            <Search />

            <Image style={styles.icon} source={chatIcon} />
        </View>


    )
}