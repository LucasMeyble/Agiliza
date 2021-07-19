import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E7E7EB',
    },
    subTitle: {
        fontSize: 25,
        color: '#4169E1',
        textAlign: 'center',
        marginTop: 5,
    },
    title: {
        fontSize: 25,
        color: '#5B687B',
        textAlign: 'center',
    },
    containerRegister: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    input: {
        flex: 1,
        width: '100%',
        marginHorizontal: 10,
        fontSize: 18,
        paddingBottom: 80,
        fontFamily: theme.fonts.roboto100,
        textAlign: 'left',
        color: theme.colors.primary
    },
    button: {
        paddingTop: 100,
        paddingLeft:80,
        paddingBottom: 85,
        flexDirection: 'row'
    },
    logoContainer: {
        paddingTop: 120
    },
    titleContainer: {
        paddingTop: 60
    },
    subTitleContainer: {
        paddingTop: 40
    },
    containerInputRegister: {

    },




    
})