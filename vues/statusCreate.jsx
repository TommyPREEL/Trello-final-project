import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { ProjectContext } from "../context";
import { statusCreate } from "../api/status";
import { styles } from "../styles";

export function StatusCreate({ navigation }) {
    const [statusName, setStatusName] = useState("");
    const { user, currentProject } = useContext(ProjectContext);

    function handleClick() {
        statusCreate(user.uid, currentProject, statusName).then(data => {
            // Refresh ?
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View style={styles.container}>
            <Input placeholder="Type a title for your Status" value={statusName} onChangeText={setStatusName} />
            <Button
            onPress={handleClick}
            title='Create a status'
            />
            <StatusBar style="auto" />
        </View>
    )
}