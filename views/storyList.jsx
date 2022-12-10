import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, View, Text, Button, TouchableOpacity } from "react-native";
import { storyAll } from "../api/story";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Story } from "../components/story";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => item.id

export function StoryList({ navigation }) {
    const [storyList, setStoryList] = useState([]);
    const { user, currentProject, currentStatus } = useContext(ProjectContext)
    //const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        storyAll(user.uid, currentProject, currentStatus).then(data => {
            setStoryList([...data])
        }).catch(err => console.log(err))

    }, []);

    // useEffect(() => {
    //     storyAll(user.uid, currentProject, currentStatus).then(data => {
    //         setStoryList([...data])
    //     }).catch(err => console.log(err))
    // }, [refresh]);

    function handleClick(){
        navigation.push('storyCreate', {modif:setStoryList})
    }

    // function refreshButton(){
    //     setRefresh(!refresh)
    // }

    const Renderer = ({ item }) => {
        return (
            <>
                <Story item={item} navigation={navigation} modif={setStoryList}/>
            </>
        )
    }

    return (
        <View style={styles.appContainer}>
            {/* <Button
            onPress={refreshButton}
            title='Refresh'
            /> */}
            <FlatList
                keyExtractor={keyExtractor}
                data={storyList}
                renderItem={Renderer}
            />
            <TouchableOpacity onPress={handleClick} style={styles.buttonCreateStatus}>
                <Text><MaterialCommunityIcons name="plus-circle" size={80} color="#68ca28"/></Text>
            </TouchableOpacity>
        </View>
    )
}