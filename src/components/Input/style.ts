import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:20,
        flexDirection:'row',
    },
    input: {
        flex: 1,
        width: '100%',
        marginHorizontal: 10,
        fontSize: 18,
        padding: 15,
        paddingLeft: 20,
        fontFamily: theme.fonts.roboto100
    },
    icon: {
        marginLeft: 20,
    }

})