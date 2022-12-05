
import { Button, ListItem } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { storyDelete } from "../api/story";
import { ProjectContext } from "../context";


export function Story({ item, navigation, modif }) {
    const { user, currentProject, currentStatus, setCurrentStory } = useContext(ProjectContext);
    const [showBox, setShowBox] = useState(true);

    function handleClick() {
        setCurrentStory(item.id)
        navigation.push("storyDetails", {item:item})
    }

    function handleEdit() {
        setCurrentStory(item.id)
        navigation.push("storyEdit", {story_name:item.name, story_content:item.content, modif:modif})
    }

    function handleDelete() {
        return Alert.alert(
            `Delete ${item.name}`,
            `Are you sure you want to remove the story ${item.name}?`,
            [
              // The "Yes" button
              {
                text: "Yes",
                onPress: () => {
                    console.log(item)
                    storyDelete(user.uid, currentProject, currentStatus, item.id).then((data) => {
                        modif(data)
                    }).catch(err => {
                        console.log(err);
                    })
                  setShowBox(false);
                },
              },
              // The "No" button
              // Does nothing but dismiss the dialog when tapped
              {
                text: "No",
                onPress: () => {
                    setShowBox(false);
                }
              },
            ]
          );
    }
    return (
        <View style={{ width: Dimensions.get('window').width }}>
            <ListItem.Swipeable bottomDivider
                leftContent={(reset) => (
                    <Button
                        title="Edit"
                        onPress={handleEdit}
                        icon={{ name: 'edit', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'orange' }}
                    />
                )}
                rightContent={(reset) => (
                    <Button
                        title="Delete"
                        onPress={handleDelete}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                )}
                onPress={handleClick}
            >
                <ListItem.Title>{item.name}</ListItem.Title>

            </ListItem.Swipeable>
        </View>
    )
}