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
    subtitle: {
        fontSize: 16,
        color: "#000",
    },
    headerUser:{
        alignItems: "center",
    },
    infoUser: {
        marginTop: 30,
    }
})