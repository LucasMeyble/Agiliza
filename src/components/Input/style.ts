import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    input: {
        flex: 1,
        width: '100%',
        marginHorizontal: 10,
        fontSize: 18,
        padding: 15,
        paddingLeft: 50,
        fontFamily: theme.fonts.roboto100
    },
    container: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:50,
        flexDirection:'row',
    },
    icon: {
        marginLeft: 20,
    }

})