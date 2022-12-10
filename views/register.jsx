import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
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
        <View style={styles.container}>
            <Input placeholder="Login" keyboardType="email-address" value={login} onChangeText={setLogin} />
            <Input placeholder="Mot de passe" secureTextEntry={true} value={mdp} onChangeText={setMdp} />
            <Input placeholder="Confirmer le mot de passe" secureTextEntry={true} value={confirm} onChangeText={setConfirm} />
            <Button onPress={handleClick}>Inscription</Button>
            <StatusBar style="auto" />
        </View>
    );
}