
import { Input, Button, Text } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { statusEdit } from "../api/status";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function StatusEdit({ navigation, route }) {
    const [statusName, setStatusName] = useState(route.params.status_name);
    const { user, currentProject, currentStatus } = useContext(ProjectContext);
    navigation.setOptions({title: route.params.status_name})
    
    function handleClick() {
        statusEdit(user.uid, currentProject, currentStatus, statusName).then(data => {
            route.params.modif([...data])
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View style={styles.container}>
            <Text>Last name : {route.params.status_name}</Text>
            <Input placeholder={route.params.status_name} value={statusName} onChangeText={setStatusName} />
            <Button 
                onPress={handleClick}
                title='Rename status'
            />
            <StatusBar style="auto" />
        </View>
    )
}