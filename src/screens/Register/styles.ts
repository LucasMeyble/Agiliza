import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E7E7EB',
    },

    imageContainer: {
        marginTop: 74,
        paddingTop: 60
    },

    header: {
        marginTop: 40
    },

    title: {
        fontSize: 35,
        color: '#5B687B',
        textAlign: 'center',
        paddingTop: 20
    },
    subTitle: {
        fontSize: 18,
        color: '#5B687B',
        textAlign: 'center',
    },

    Hr: {
        marginTop: 50,
        marginHorizontal: 20,
        height: 1,
        backgroundColor: '#546B7B',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#E7E7EB', 
        paddingHorizontal:10,
    },
    viewButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 23,
    },
    signOut: {
        fontSize: 15,

    },
    viewSignOut: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
    }
})