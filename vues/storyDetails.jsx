import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function StoryDetails({ route }) {
    const { user, currentProject, currentStatus } = useContext(ProjectContext);
    const [project, setProject] = useState({});
    const [status, setStatus] = useState({});

    useEffect(() => {
        projectById(user.uid, currentProject).then(data => {
            setProject([...data])
        }).catch(err => console.log(err))
        statusById(user.uid, currentProject, currentStatus).then(data => {
            setStatus([...data])
        }).catch(err => console.log(err))
    }, []);

    function test(){
        console.log(currentProject)
    }

    return (
        <View style={styles.container}>
            <Text>Project name : {project.name}</Text>
            <Text>Status name : {status.name}</Text>
            <Text>Story name : {route.params.item.name}</Text>
            <Text>Description : {route.params.item.content}</Text>
            <Button
            onPress={test}
            title='Test'
            />
            <StatusBar style="auto" />
        </View>
    );
}