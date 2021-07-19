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
        fontSize: 16,
        marginLeft: 10
    },
    icon: {
        width: 25,
        height: 23.75,
        
    },
    iconContainer:{
        alignItems: "center",
        justifyContent: "center",
        height:82,
        width:'30%',
        borderRightColor:'#4169E1',
        borderRightWidth:1,
    },
    textContainer: {
        width: '70%'
    }
 


})