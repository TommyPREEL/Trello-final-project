
import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, TextInput, Text, TouchableOpacity } from "react-native";
import { statusEdit } from "../api/status";
import { ProjectContext } from "../context";
import { styles } from "../styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

        <View style={styles.appContainer}>
           <View style={styles.statusEditRow}><Text style={styles.statusEditText}>Last name : </Text><Text style={styles.statusEditLastNameValue}>{route.params.status_name}</Text></View>
            <TextInput placeholder={route.params.status_name} style={styles.input} value={statusName} onChangeText={setStatusName} />
            <TouchableOpacity onPress={handleClick} style={styles.buttonActionToCreateStatus}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="pencil" size={20} color="white"/> Rename status</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}