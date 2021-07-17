import React from "react";
import { View, Text, Button } from "react-native";

import { styles } from './style';

export function NewCalled({ navigation }: any) {
    return(

        <View style={styles.container}>
            <Button title="aperte=me" onPress={() => navigation.navigate('Login')}/>
        </View>

    )
}