import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  
    container: {
        
        marginTop: 10,
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
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        color: '#B0ADAD',
    },
    info: {
        fontSize: 12,
    },
    avatarImage: {
        width: 60,
        height: 50,
    },
    viewInfo: {
        flex: 1,
        paddingLeft: 10,
    },
    number: {
        fontSize: 10,
    }
})