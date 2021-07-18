import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  
    container: {
        
    },
    Hr: {
        marginHorizontal: 20,
        height: 1,
        backgroundColor: '#CFCFCF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    comment: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    header: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameClassification: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
    textClassification: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 30,
    },
    star:{
        marginTop: 5,
        marginRight: 5,
        flexDirection: 'row',
    }
})