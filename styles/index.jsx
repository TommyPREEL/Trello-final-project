import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    /* 
    SHARED STYLES    
    */
   input:{
    fontSize:20,
    margin:10,
    backgroundColor:'#EAEAEA',
    borderRadius: 50,
    width:250,
    height:50,
    borderBottomWidth: 0,
    textAlign:'center',
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
   },
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
    /*
    PROJECT ROUTER
    */
    projectListRouterTabNavigator: {
        backgroundColor: '#ffa634',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*
    STATUS ROUTER
    */
    statusListRouterTabNavigator:{
        backgroundColor: '#8e38b9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*
    CONNECT COMPONENT
    */
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
        textAlign:'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    passwordConnexion:{
        backgroundColor:'#EAEAEA',
        borderRadius: 50,
        width:200,
        height:50,
        textAlign:'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    buttonConnexion:{
        borderRadius: 50,
        margin:10,
        width:250,
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
        fontSize:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*
    REGISTER COMPONENT
    */
    emailAddressRegister:{
        backgroundColor:'#EAEAEA',
        borderRadius: 50,
        width:200,
        height:50,
        borderBottomWidth: 0,
        textAlign:'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    passwordRegister:{
        backgroundColor:'#EAEAEA',
        borderRadius: 50,
        width:200,
        height:50,
        textAlign:'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    confirmPasswordRegister:{
        backgroundColor:'#EAEAEA',
        borderRadius: 50,
        width:200,
        height:50,
        textAlign:'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    textButtonRegister:{
        color:"#FFFFFF",
        fontSize:20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formRegister:{
        height:300,
        width:300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
    },
    buttonRegister:{
        borderRadius: 50,
        width:250,
        height:50,
        backgroundColor:'#0E8AFE',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
    },
    /*
    PROJECTLIST COMPONENT
    */
    buttonCreateProject:{
        position:"absolute",
        right:25,
        bottom: 25,
        borderRadius: 50,
        zIndex:10,
    },
    /*
    PROJECTCREATE COMPONENT
    */
    buttonActionToCreateProject:{
        borderRadius: 50,
        width:200,
        height:50,
        backgroundColor:'#ffa634',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
    },
    textActionToCreate:{
        color:'white',
        fontSize:15,
    },
    /*
    STATUSCREATE COMPONENT
    */
    buttonCreateStatus:{
        position:"absolute",
        right:25,
        bottom: 25,
        borderRadius: 50,
        zIndex:10,
    },
    buttonActionToCreateStatus:{
        borderRadius: 50,
        width:200,
        height:50,
        backgroundColor:'#8e38b9',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
    },
    /*
    STORYLIST ROUTER
    */
    storyListRouterTabNavigator:{
        backgroundColor: '#68ca28',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /* 
    STORYCREATE COMPONENT
    */
    buttonActionToImportImage:{
        borderRadius: 50,
        width:200,
        height:50,
        backgroundColor:'#68ca28',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
    },
    buttonActionToCreateStory:{
        borderRadius: 50,
        width:200,
        height:50,
        backgroundColor:'#68ca28',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
    },
    buttonActionToDeleteImage:{
        borderRadius: 50,
        width:200,
        height:50,
        backgroundColor:'#f15c5c',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10,
    },
    /*
    STORYDETAILS COMPONENT
    */
    storyDetailsProjectName:{
        fontSize:20,
        backgroundColor:'#68ca28',
        padding:20,
        borderRadius: 20,
    },
    storyDetailsStatusName:{
        fontSize:20,
        backgroundColor:'#68ca28',
        padding:20,
        borderRadius: 20,
    },
    storyDetailsStoryName:{
        fontSize:20,
        backgroundColor:'#68ca28',
        padding:20,
        borderRadius: 20,
    },
    storyDetailsStoryDescription:{
        fontSize:20,
        backgroundColor:'#68ca28',
        padding:20,
        borderRadius: 20,
    },
    storyDetailsText:{
        fontSize:20,
        padding:20,
    },
    storyDetailsRow:{
        flexDirection:'row',
        margin:10,
        borderRadius: 20,
    },
    /*
    STORYLIST COMPONENT
    */
    buttonCreateStory:{
        position:"absolute",
        right:25,
        bottom: 25,
        borderRadius: 50,
        zIndex:10,
    },
    /*
    PROJECTEDIT COMPONENT
    */
   projectEditRow:{
        flexDirection:'row',
        margin:10,
        borderRadius: 20,
    },
    projectEditLastName:{
        fontSize:20,
        padding:10,
    },
    projectEditLastNameValue:{
        backgroundColor:'#ffa634',
        padding:20,
        borderRadius: 20,
        fontSize:20,
        color:'white'
    },
    projectEditText:{
        fontSize:20,
        padding:20,
    },
    /*
    STATUSEDIT COMPONENT
    */
    statusEditRow:{
        flexDirection:'row',
        margin:10,
        borderRadius: 20,
    },
    statusEditLastName:{
        fontSize:20,
        padding:10,
    },
    statusEditLastNameValue:{
        backgroundColor:'#8e38b9',
        padding:20,
        borderRadius: 20,
        fontSize:20,
        color:'white'
    },
    statusEditText:{
        fontSize:20,
        padding:20,
    },
    /*
    STORYEDIT COMPONENT
    */
    storyEditRow:{
        flexDirection:'row',
        margin:10,
        borderRadius: 20,
    },
    storyEditLastName:{
        fontSize:20,
        padding:10,
    },
    storyEditLastNameValue:{
        backgroundColor:'#68ca28',
        padding:20,
        borderRadius: 20,
        fontSize:20,
        color:'white'
    },
    storyEditText:{
        fontSize:20,
        padding:20,
    },
});