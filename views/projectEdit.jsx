
import { Input, Button, Text } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { projectEdit } from "../api/project";
import { ProjectContext } from "../context";

import { styles } from "../styles";

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
            <Text>Last name : {route.params.p_name}</Text>
            <Input placeholder={route.params.p_name} value={projectName} onChangeText={setProjectName} />
            <Button onPress={handleClick}>Rename project</Button>
            <StatusBar style="auto" />
        </View>
    )
}