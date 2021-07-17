import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
       backgroundColor: "#fff",
       marginTop: 20,
    },
    header: {
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
    content: {
        padding: 20,
    },
    titleService: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    messageService: {
        fontSize: 14,
        textAlign: 'justify',
    },
    button:{
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        marginHorizontal: 5,
    },
    buttons: {
        marginTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    }

})