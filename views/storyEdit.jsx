
import { Input, Button, Text } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { storyEdit } from "../api/story";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function StoryEdit({ navigation, route }) {
    const [storyName, setStoryName] = useState(route.params.story_name);
    const [storyContent, setStoryContent] = useState(route.params.story_content);
    const { user, currentProject, currentStatus, currentStory } = useContext(ProjectContext);
    navigation.setOptions({title: route.params.story_name})
    
    function handleClick() {
        storyEdit(user.uid, currentProject, currentStatus, currentStory, storyName, storyContent).then(data => {
            route.params.modif([...data])
            navigation.goBack()
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <View style={styles.appContainer}>
            <Text>Last name : {route.params.story_name}</Text>
            <Input placeholder={route.params.story_name} value={storyName} onChangeText={setStoryName} />
            <Text>Last description : {route.params.story_content}</Text>
            <Input multiline={true} numberOfLines={4} 
            placeholder={route.params.story_content} value={storyContent} onChangeText={setStoryContent} />
            <Button 
                onPress={handleClick}
                title='Update story'
            />
            <StatusBar style="auto" />
        </View>
    )
}