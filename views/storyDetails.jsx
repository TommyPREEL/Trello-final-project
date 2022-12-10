import { Button, Input } from "@rneui/themed";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View, Text } from "react-native";
import { ProjectContext } from "../context";
import { styles } from "../styles";
import { projectById } from "../api/project";
import { statusById } from "../api/status";

export function StoryDetails({ route, navigation }) {
    const { user, currentProject, currentStatus } = useContext(ProjectContext);
    const [project, setProject] = useState({});
    const [status, setStatus] = useState({});
    navigation.setOptions({title: route.params.item.name})
    
    useEffect(() => {
        projectById(user.uid, currentProject).then(data => {
            setProject(data)
            statusById(user.uid, currentProject, currentStatus).then(data1 => {
                setStatus(data1)
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }, []);

    return (
        <View style={styles.appContainer}>
            <View style={styles.storyDetailsRow}><Text style={styles.storyDetailsText}>Project name : </Text><Text style={styles.storyDetailsProjectName}>{project.name}</Text></View>
            <View style={styles.storyDetailsRow}><Text style={styles.storyDetailsText}>Status name : </Text><Text style={styles.storyDetailsStatusName}>{status.name}</Text></View>
            <View style={styles.storyDetailsRow}><Text style={styles.storyDetailsText}>Story name : </Text><Text style={styles.storyDetailsStoryName}>{route.params.item.name}</Text></View>
            <View style={styles.storyDetailsRow}><Text style={styles.storyDetailsText}>Description : </Text><Text style={styles.storyDetailsStoryDescription}>{route.params.item.content}</Text></View>
            {/* {route.params.item.image && <>
                <Image source={{ uri: route.params.item.image }} style={{ width: 200, height: 200 }} />
            </>} */}
            <StatusBar style="auto" />
        </View>
    );
}