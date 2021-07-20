import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    header:{
        flexDirection:'row',
        backgroundColor: '#fff',
        height: 80,
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 25,
    },
    
    content: {
        backgroundColor: '#fff',
        marginTop: 10,
        flex: 1,
    },
    inputContainer: {
        paddingRight: 200,
        marginLeft:10, 
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#E5E5E5',
    },
    
    input:{
        fontSize: 15,
        marginLeft: 10,
        paddingRight: 50,

    },
})