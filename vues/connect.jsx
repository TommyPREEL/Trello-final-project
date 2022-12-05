import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
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
        <View style={styles.container}>
            <Input placeholder="Login" keyboardType="email-address" value={login} onChangeText={setLogin} />
            <Input placeholder="Mot de passe" secureTextEntry={true} value={mdp} onChangeText={setMdp} />
            <Button onPress={handleClick}>Connexion</Button>
            <StatusBar style="auto" />
        </View>
    );
}