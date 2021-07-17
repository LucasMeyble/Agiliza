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
    content: {
        height: 70,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: '#B0ADAD',
    },
    info: {
        fontSize: 12,
    }
})