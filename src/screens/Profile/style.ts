import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    content: {
        backgroundColor: "#fff",
        width: '90%',
        flex: 1,
        marginHorizontal: 30,
        marginTop: 150,
        paddingBottom: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",  
    },
    titleInfo:{
        paddingLeft: 25,
        fontSize: 20,
        color: "#000",  
    },
    about: {
        height: 70,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: "#000",
    },
    headerUser:{
        alignItems: "center",
    },
    infoUser: {
        marginTop: 30,
    },
    avatarImage: {
        width: 162,
        height: 162,
        borderRadius: 120,
    },
    background:{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: 175,
        height: 175,
        backgroundColor: "#fff",
        borderRadius: 120,
        marginTop: -80,
    }
})