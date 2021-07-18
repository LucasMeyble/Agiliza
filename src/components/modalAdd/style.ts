import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

  
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    header:{
        flexDirection:'row',
        backgroundColor: '#fff',
        height: 80,
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 25,
    },
    titleModal:{
        marginLeft: 25,
        fontSize: 17
    },
    content: {
        backgroundColor: '#fff',
        marginTop: 10,
        flex: 1,
    },
    headerContent:{
        flexDirection:'row',
        justifyContent:'space-between'
    },   
    image: {
        margin: 20,
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    buttonRas: {
        borderWidth: 1,
        borderColor: '#4169E1',
        borderRadius: 20,
        paddingVertical: 7, 
        marginRight: 10, 
        paddingHorizontal: 20,
    },
    textRas: {
        color: '#4169E1',
        fontSize: 12,
    },
    buttonPub: {
        borderWidth: 1,
        backgroundColor: '#4169E1',
        borderRadius: 20,
        paddingVertical: 7, 
        marginRight: 10, 
        paddingHorizontal: 25,
    },
    textPub:{
        color: '#fff',
        fontSize: 12,
    },
    butons:{
        flexDirection:'row',
        alignItems:'center',
    },
    inputTitle: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 25,
    },
    inputMensage:{
        fontSize: 15,
        marginTop: 30,
        marginLeft: 25,
    },
    bottom:{
        paddingHorizontal: 20,
        height:70,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',

    },
    iconBottom:{
        marginHorizontal: 8,
        width: 35,
        height: 30,
    },
    iconMore:{
        marginHorizontal: 8,
    },
})