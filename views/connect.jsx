import { Button, Input, Text  } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View, Image, TouchableOpacity } from "react-native";
import { connectUser } from "../api/connect";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function Connect() {
    const [login, setLogin] = useState("test@test.com");
    const [mdp, setMdp] = useState("123456");
    const { setUser } = useContext(ProjectContext);

    function handleClick() {
        Keyboard.dismiss()
        connectUser(login, mdp).then(data => {
            setUser(data)
        }).catch(err => {
            Alert.alert(err)
        })

    }
    return (
        <View style={styles.appContainer}>
            <Image source={require('../assets/logo-trello.png')} style={styles.logo}/>
            <View style={styles.formConnexion}>
                <Input placeholder="Email address" keyboardType="email-address" value={login} onChangeText={setLogin} style={styles.emailAddressConnexion} />
                <Input placeholder="Password" secureTextEntry={true} value={mdp} onChangeText={setMdp} style={styles.passwordConnexion}/>
                {/* <View style={styles.buttonConnexionView}> */}
                <TouchableOpacity onPress={handleClick} style={styles.buttonConnexion}>
                <Text style={styles.textButtonConnexion}>Connexion</Text>
                </TouchableOpacity>
                {/* </View> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}