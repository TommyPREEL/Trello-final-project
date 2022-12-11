import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View, Image, TouchableOpacity, TextInput, Text } from "react-native";
import { connectUser } from "../api/connect";
import { ProjectContext } from "../context";
import { styles } from "../styles";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { getRedirectResult, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../api/app";
// import GoogleButton from "react-google-button";


export function Connect() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const { setUser } = useContext(ProjectContext);

    function handleClick() {
        Keyboard.dismiss()
        connectUser(login, mdp).then(data => {
            setUser(data)
        }).catch(err => {
            Alert.alert(err)
        })
    }

    // Function for Google Auth, signInWithPopup not found :(

    // function connectToGoogle(){
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //         // This gives you a Google Access Token. You can use it to access Google APIs.
    //         // const credential = GoogleAuthProvider.credentialFromResult(result);
    //         // const token = credential.accessToken;
    //         // The signed-in user info.
    //         const user = result.user;
    //         //search a solution to find the user ID 
    //         //setUser(user.id)         
    //     }).catch((error) => {
    //         // Handle Errors here.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // The email of the user's account used.
    //         const email = error.customData.email;
    //         // The AuthCredential type that was used.
    //         const credential = GoogleAuthProvider.credentialFromError(error);
    //         // ...
    //     });
    // }

    return (
        <View style={styles.appContainer}>
            <Image source={require('../assets/logo-trello.png')} style={styles.logo}/>
            <View style={styles.formConnexion}>
                <TextInput placeholder="Email address" keyboardType="email-address" value={login} onChangeText={setLogin} underlineColorAndroid="transparent" style={styles.input} />
                <TextInput placeholder="Password" secureTextEntry={true} value={mdp} onChangeText={setMdp} underlineColorAndroid="transparent" style={styles.input}/>
                {/* <View style={styles.buttonConnexionView}> */}
                <TouchableOpacity onPress={handleClick} style={styles.buttonConnexion}>
                <Text style={styles.textButtonConnexion}>Connexion</Text>
                </TouchableOpacity>
                {/* </View> */}
                {/* <FontAwesome.Button name="google" backgroundColor="#4285F4" style={{fontFamily: "Roboto"}} onPress={connectToGoogle}>
                    Login with Google
                </FontAwesome.Button> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}