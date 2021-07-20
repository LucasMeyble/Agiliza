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
        fontWeight: 'bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }, 
    button:{
        margin: 10,
        marginBottom: 5
    },

})