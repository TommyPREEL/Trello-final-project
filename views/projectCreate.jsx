import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, TouchableOpacity, TextInput, Text } from "react-native";
import { projectCreate } from "../api/project";
import { ProjectContext } from "../context";
import { styles } from "../styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { ButtonAdd } from "../components/button";

export function ProjectCreate({ navigation, route }) {
    const [projectName, setProjectName] = useState("");
    const { user } = useContext(ProjectContext);

    function handleClick() {
        projectCreate(user.uid, projectName).then(data => {
            route.params.modif([...data]);
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.appContainer}>
            <TextInput placeholder="Project Title" style={styles.input} value={projectName} onChangeText={setProjectName} />
            {/* <ButtonAdd navigation={navigation} section='project' projectName={projectName}></ButtonAdd> */}
            <TouchableOpacity onPress={handleClick} style={styles.buttonActionToCreateProject}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="plus-circle" size={20} color="white"/> Create new Project</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}