import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
       
      marginTop:50,
      paddingHorizontal: 50,
    },
    button: {
        height: 80,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        backgroundColor: "#FFFFFF",
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textButton: {
        color: "#4169E1",
        fontSize: 18,
        marginLeft:30
    },
    icon: {
        marginTop:30,
        marginLeft: 30,
        marginRight: 15,
        width: 25,
        height: 23.75,
        
    },
    iconContainer:{
        height:82,
        marginBottom: 1,
        width:'30%',
        borderRadius: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 0.10,
        shadowRadius: 4.65,

        elevation: 1
    },
    textContainer: {
        width: '70%'
    }
 


})