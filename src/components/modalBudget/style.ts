import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    header:{
        backgroundColor: '#fff',
        height: 80,
        justifyContent: 'center'
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 21
    },

    chat: {
        paddingRight: 10
    },

    icon: {
        width: 20,
        height: 20,
        
    },
    
    titleContainer: {
        alignItems: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 24
    },

    itensContainer: {
        paddingHorizontal: 15,
        marginVertical: 25,
        
    },

    input: {
        marginRight: 250,
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    inputDetails: {
        marginRight: 40,
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },
    
    txtInput:{
        fontSize: 20,
        
    },

    budget: {
        fontWeight: 'bold',
        fontSize: 24
    },

    buttonContainer: {
        marginTop: 170,
        alignItems: 'center',
    }
    
})