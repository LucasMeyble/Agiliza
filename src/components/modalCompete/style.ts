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
    
    content: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
    },

    user: {
        padding: 20,
        flexDirection: "row",
    },

    avatarImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },

    infoUser: {
        marginLeft: 10,
    },

    titleUser: {
        fontSize: 18,
    },
    descriptionUser: {
        fontSize: 11,
    },
    time: {
        fontSize: 7,
    },

    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 35
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',

    },

    subTitle: {
        fontSize: 16
    },

    bodyProject: {
        marginVertical: 40,
        marginHorizontal: 20,
    },

    titleProject: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    textProject: {
        fontSize: 18
    },

    proposalContainer: {
        marginHorizontal: 20,
    },

    titleProposal: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    textProposal: {
        fontSize: 18
    },

    buttonContainer: {
        marginTop: 170,
        alignItems: 'center',
    }

})