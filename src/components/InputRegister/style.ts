import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    input: {
        flex: 1,
        width: '100%',
        marginHorizontal: 10,
        fontSize: 18,
        padding: 15,
        fontFamily: theme.fonts.roboto100,
        textAlign: 'center',
        color: theme.colors.primary
    },
    container: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    icon: {
        marginLeft: 20,
    }

})