import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

export function Input(){
    return(

        <TextInput 
            style={styles.input}
            placeholder="teste"
        />

    )
}