import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, TouchableOpacity, TextInput, Text } from "react-native";
import { ProjectContext } from "../context";
import { statusAll, statusCreate } from "../api/status";
import { styles } from "../styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function StatusCreate({ navigation, route}) {
    const [statusName, setStatusName] = useState("");
    const { user, currentProject } = useContext(ProjectContext);

    function handleClick() {
        statusCreate(user.uid, currentProject, statusName).then(data => {
            statusAll(user.uid, currentProject).then(statusList => {
                route.params.modif([...statusList]);
                navigation.goBack()
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.appContainer}>
            <TextInput placeholder="Status Title" value={statusName} style={styles.input} onChangeText={setStatusName} />
            <TouchableOpacity onPress={handleClick} style={styles.buttonActionToCreateStatus}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="plus-circle" size={20} color="white"/> Create new Status</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}