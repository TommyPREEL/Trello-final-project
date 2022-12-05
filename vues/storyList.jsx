import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, View, Text, Button } from "react-native";
import { storyAll } from "../api/story";

import { Story } from "../components/story";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => item.id

export function StoryList({ navigation }) {
    const [storyList, setStoryList] = useState([]);
    const { user, currentProject, currentStatus } = useContext(ProjectContext)
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        storyAll(user.uid, currentProject, currentStatus).then(data => {
            setStoryList([...data])
        }).catch(err => console.log(err))

    }, []);

    useEffect(() => {
        storyAll(user.uid, currentProject, currentStatus).then(data => {
            setStoryList([...data])
        }).catch(err => console.log(err))
    }, [refresh]);

    function handleClick(){
        navigation.push('storyCreate')
    }

    function refreshButton(){
        setRefresh(!refresh)
    }

    const Renderer = ({ item }) => {
        return (
            <>
                <Story item={item} navigation={navigation} modif={setStoryList}/>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <Button
            onPress={refreshButton}
            title='Refresh'
            />
            <Button
                onPress={handleClick}
                title='Create a new Story'
                color="#841584"
            />
            <FlatList
                keyExtractor={keyExtractor}
                data={storyList}
                renderItem={Renderer}
            />
        </View>
    )
}