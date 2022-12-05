import { Button, Input, Text } from "@rneui/themed";
import { useContext } from "react";
import { useState } from "react";
import { Alert, Keyboard, StatusBar, View } from "react-native";
import { connectUser } from "../api/connect";
import { ProjectContext } from "../context";
import { styles } from "../styles";

export function StoryDetails() {
    const { user } = useContext(ProjectContext);

    return (
        <View style={styles.container}>
            <Text>Story name : </Text>
            <StatusBar style="auto" />
        </View>
    );
}