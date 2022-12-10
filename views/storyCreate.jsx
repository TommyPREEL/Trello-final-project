import { Input, Button, Image } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View, TextInput, TouchableOpacity, Text } from "react-native";
import { ProjectContext } from "../context";
import { storyCreate, storyAll, storyCreateWithImage } from "../api/story";
import { styles } from "../styles";
import * as ImagePicker from 'expo-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function StoryCreate({ navigation, route }) {
    const [storyName, setStoryName] = useState("");
    const [storyContent, setStoryContent] = useState("");
    const { user, currentProject, currentStatus } = useContext(ProjectContext);
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    function delImage() {
        setImage(null)
    }

    function handleClick() {
        //storyCreate(user.uid, currentProject, currentStatus, storyName, storyContent).then(data => {
        storyCreateWithImage(user.uid, currentProject, currentStatus, storyName, storyContent, image).then(data => {
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
        <View style={styles.appContainer}>
            <TextInput placeholder="Story Title" value={storyName} onChangeText={setStoryName} style={styles.input} />
            <TextInput multiline={true} numberOfLines={4} style={styles.input}
            placeholder="Story Description" value={storyContent} onChangeText={setStoryContent} />
            {/* <TextInput placeholder="Status Title" value={statusName} style={styles.input} onChangeText={setStatusName} /> */}
            {!image && <TouchableOpacity onPress={pickImage} style={styles.buttonActionToImportImage}>
                        <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="upload" size={20} color="white"/> Import Image</Text>
                        </TouchableOpacity>}
            {image && <>
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                <TouchableOpacity onPress={delImage} style={styles.buttonActionToDeleteImage}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="delete" size={20} color="white"/> Delete</Text>
            </TouchableOpacity>
            </>}
            <TouchableOpacity onPress={handleClick} style={styles.buttonActionToCreateStory}>
                <Text style={styles.textActionToCreate}><MaterialCommunityIcons name="plus-circle" size={20} color="white"/> Create new Story</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}
