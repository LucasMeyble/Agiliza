import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 70,
        alignItems: 'center',
        marginHorizontal: 10
    },
    
    text: {
        fontFamily: theme.fonts.roboto300,
        fontSize: 40,
        textAlign: 'center',
    },

    button: {
        marginTop: 120
    }

})