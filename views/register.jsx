import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View, TouchableOpacity, Image, TextInput } from "react-native";
import { createUser } from "../api/connect";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function Register() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");
    const [confirm, setConfirm] = useState("");
    const { setUser } = useContext(ProjectContext);
    function handleClick() {
        Keyboard.dismiss()
        if (confirm === mdp) {
            createUser(login, mdp).then(data => {
                setUser(data)
            }).catch(err => {
                Alert.alert(err)
            })
        } else {
            Alert.alert("Mot de passes différents")
        }
    }
    return (
        <View style={styles.appContainer}>
            <Image source={require('../assets/logo-trello.png')} style={styles.logo}/>
            <View style={styles.formRegister}>
                <TextInput placeholder="Email Address" keyboardType="email-address" value={login} onChangeText={setLogin} underlineColorAndroid="transparent" style={styles.input}/>
                <TextInput placeholder="Password" secureTextEntry={true} value={mdp} onChangeText={setMdp} underlineColorAndroid="transparent" style={styles.input}/>
                <TextInput placeholder="Confirm the password" secureTextEntry={true} value={confirm} onChangeText={setConfirm} underlineColorAndroid="transparent" style={styles.input}/>
                <TouchableOpacity onPress={handleClick} style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>Create account</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}