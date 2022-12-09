import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { ProjectContext } from "../context";
import { styles } from "../styles";
import { projectById } from "../api/project";
import { statusById } from "../api/status";

export function StoryDetails({ route }) {
    const { user, currentProject, currentStatus } = useContext(ProjectContext);
    const [project, setProject] = useState({});
    const [status, setStatus] = useState({});
    
    useEffect(() => {
        projectById(user.uid, currentProject).then(data => {
            setProject(data)
            statusById(user.uid, currentProject, currentStatus).then(data1 => {
                setStatus(data1)
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }, []);

    return (
        <View style={styles.container}>
            <Text>Project name : {project.name}</Text>
            <Text>Status name : {status.name}</Text>
            <Text>Story name : {route.params.item.name}</Text>
            <Text>Description : {route.params.item.content}</Text>
            {/* {route.params.item.image && <>
                <Image source={{ uri: route.params.item.image }} style={{ width: 200, height: 200 }} />
            </>} */}
            
            <StatusBar style="auto" />
        </View>
    );
}