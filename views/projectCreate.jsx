import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { projectCreate } from "../api/project";
import { ProjectContext } from "../context";
import { styles } from "../styles";
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

        <View style={styles.container}>
            <Input placeholder="Type a title for your project" value={projectName} onChangeText={setProjectName} />
            {/* <ButtonAdd navigation={navigation} section='project' projectName={projectName}></ButtonAdd> */}
            <Button
            onPress={handleClick}
            title='Create a Project'
            />
            <StatusBar style="auto" />
        </View>
    )
}