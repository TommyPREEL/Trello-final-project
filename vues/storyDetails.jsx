import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function StoryDetails({ route }) {
    const { user, currentProject, currentStatus, currentStory } = useContext(ProjectContext);
    function test(){
        console.log(currentProject)
    }

    return (
        <View style={styles.container}>
            <Text>Project name : {}</Text>
            <Text>Status name : {}</Text>
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