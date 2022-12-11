
import { Input, Button } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, TextInput, Text, TouchableOpacity } from "react-native";
import { storyEdit } from "../api/story";
import { ProjectContext } from "../context";
import { styles } from "../styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
            <View style={styles.storyEditRow}><Text style={styles.storyEditText}>Last name : </Text><Text style={styles.storyEditLastNameValue}>{route.params.story_name}</Text></View>
            <TextInput placeholder={route.params.story_name} style={styles.input} value={storyName} onChangeText={setStoryName} />
            <View style={styles.storyEditRow}><Text style={styles.storyEditText}>Last description :</Text><Text style={styles.storyEditLastNameValue}>{route.params.story_content}</Text></View>
            <TextInput placeholder={route.params.story_content} style={styles.input} value={storyContent} onChangeText={setStoryContent} multiline={true} numberOfLines={4} />
            <TouchableOpacity onPress={handleClick} style={styles.buttonActionToCreateStory}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="pencil" size={20} color="white"/> Update Story</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}