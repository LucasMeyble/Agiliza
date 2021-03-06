import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E7E7EB',
    },
    backIcon:{
        marginTop: 18,
        marginRight: 20,
        width: 21,
        height: 35,
    },
    avatarImage: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    header: {
        marginTop: 60,
        marginLeft: 20,
        flexDirection: "row",
    },
    textHeader: {
        marginTop: 12,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: "#000",
    },
    subtitle: {
        fontSize: 13,
        color: "#000",
    },
    content: {
        flex: 1,
        marginTop: 60,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        borderRadius: 17,
        marginBottom: 10,
        marginHorizontal: 20,
        backgroundColor: "#fff",
        shadowColor: "#000",
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 5,
    },
    buttonAdd:{
        justifyContent: "center",
        height: 80,
        width: 150,
        borderRadius: 17,
        marginRight: 20,
        marginLeft: -90,
        backgroundColor: "#37D087",
        shadowColor: "#000",
        marginTop: 10,
        position: 'relative',
        paddingLeft: 90
    },
    icon: {
        marginLeft: 20,
        width: 25,
        height: 25,

    },
    titleJob:{
        marginLeft: 20,
        fontSize: 17,
        color: "#5C6660",
    }, 
    backgroundImage:{
        width: 75,
        height: 75,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor:'#0012B1',
    }


})