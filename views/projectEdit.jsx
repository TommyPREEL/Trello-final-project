
import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, TextInput, Text, TouchableOpacity } from "react-native";
import { projectEdit } from "../api/project";
import { ProjectContext } from "../context";
import { styles } from "../styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function ProjectEdit({ navigation, route }) {
    const [projectName, setProjectName] = useState(route.params.p_name);
    const { user, currentProject } = useContext(ProjectContext);
    navigation.setOptions({title: route.params.p_name});
    
    function handleClick() {
        console.log(currentProject)
        projectEdit(user.uid, currentProject, projectName).then(data => {
            route.params.modif([...data])
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (

        <View style={styles.appContainer}>
            <View style={styles.projectEditRow}><Text style={styles.projectEditText}>Last name : </Text><Text style={styles.projectEditLastNameValue}>{route.params.p_name}</Text></View>
            <TextInput placeholder={route.params.p_name} style={styles.input} value={projectName} onChangeText={setProjectName} />
            <TouchableOpacity onPress={handleClick} style={styles.buttonActionToCreateProject}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="pencil" size={20} color="white"/> Rename project</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}