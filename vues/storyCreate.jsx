import { Input, Button, Image } from "@rneui/themed";
import { useState, useContext } from "react";
import { StatusBar, View } from "react-native";
import { ProjectContext } from "../context";
import { storyCreate, storyAll, storyCreateWithImage } from "../api/story";
import { styles } from "../styles";
import * as ImagePicker from 'expo-image-picker';

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
        <View style={styles.container}>
            <Input placeholder="Type a title for your Story" value={storyName} onChangeText={setStoryName} />
            <Input multiline={true} numberOfLines={4} 
            placeholder="Type a description for your Story" value={storyContent} onChangeText={setStoryContent} />
            {!image && <Button title="Pick an image from camera roll" onPress={pickImage} />}
            {image && <>
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                <Button title="Effacer" onPress={delImage} />
            </>}
            <Button
            onPress={handleClick}
            title='Create a story'
            />
            <StatusBar style="auto" />
        </View>
    )
}