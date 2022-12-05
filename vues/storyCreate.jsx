import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { ProjectContext } from "../context";
import { storyCreate, storyAll } from "../api/story";
import { styles } from "../styles";

export function StoryCreate({ navigation, route }) {
    const [storyName, setStoryName] = useState("");
    const [storyContent, setStoryContent] = useState("");
    const { user, currentProject, currentStatus } = useContext(ProjectContext);

    function handleClick() {
        storyCreate(user.uid, currentProject, currentStatus, storyName, storyContent).then(data => {
            storyAll(user.uid, currentProject, currentStatus).then(storyList => {
                route.params.modif([...storyList]);
                navigation.goBack()
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.container}>
            <Input placeholder="Type a title for your Story" value={storyName} onChangeText={setStoryName} />
            <Input multiline={true} numberOfLines={4} 
            placeholder="Type a description for your Story" value={storyContent} onChangeText={setStoryContent} />
            <Button
            onPress={handleClick}
            title='Create a story'
            />
            <StatusBar style="auto" />
        </View>
    )
}