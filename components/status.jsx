
import { Button, ListItem } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { statusDelete } from "../api/status";
import { ProjectContext } from "../context";

export function Status({ item, navigation, modif }) {
    const { user, currentProject, setCurrentStatus } = useContext(ProjectContext);
    const [showBox, setShowBox] = useState(true);

    function handleClick() {
        setCurrentStatus(item.id)
        navigation.push("storyListRouter")
    }

    function handleEdit() {
        setCurrentStatus(item.id)
        navigation.push("statusEdit", {status_name:item.name, modif:modif})
    }

    function handleDelete() {
        return Alert.alert(
            `Delete ${item.name}`,
            `Are you sure you want to remove the status ${item.name}?`,
            [
              // The "Yes" button
              {
                text: "Yes",
                onPress: () => {
                    console.log(item)
                    statusDelete(user.uid, currentProject, item.id).then((data) => {
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