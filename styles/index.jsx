import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    appContainer:{
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    projectListRouterTab: {
        backgroundColor: '#FFAE73',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        maxWidth:400,
        maxHeight:400,
        top:0,
    },
    emailAddressConnexion:{
        backgroundColor:'#EAEAEA',
        borderRadius: 50,
        width:200,
        height:50,
        borderBottomWidth: 0,
    },
    passwordConnexion:{
        backgroundColor:'#EAEAEA',
        borderRadius: 50,
        width:200,
        height:50
    },
    buttonConnexion:{
        borderRadius: 50,
        width:200,
        height:50,
        backgroundColor:'#0E8AFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonConnexionView:{
        flex:1,
        flexDirection:'row',
        width:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formConnexion:{
        height:300,
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
    textButtonConnexion:{
        color:"#FFFFFF",
        fontSize:20
    }
});