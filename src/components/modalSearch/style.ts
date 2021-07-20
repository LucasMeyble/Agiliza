import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    header:{
        
        backgroundColor: '#fff',
        height: 80,
        alignItems: 'center',
    },
    subHeader: {
        flexDirection:'row',
        marginTop: 20,
        alignItems: 'center',

    },

    icon: {
        width: 20,
        height: 20,
        
    },

    options: {
        width: '100%',
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60
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