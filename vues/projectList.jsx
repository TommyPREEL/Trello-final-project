import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, View, Text, Button } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { projectAll } from "../api/project";
import { ButtonCreate } from "../components/button";

import { Project } from "../components/project";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => item.id

export function ProjectList({ navigation }) {
    const [projectList, setProjectList] = useState([]);
    const { user } = useContext(ProjectContext)
    const [refresh, setRefresh] = useState(true);

    //const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
        projectAll(user.uid).then(data => {
            setProjectList([...data])
        }).catch(err => console.log(err))
    }, []);

    useEffect(() => {
        projectAll(user.uid).then(data => {
            setProjectList([...data])
        }).catch(err => console.log(err))
    }, [refresh]);


    const Renderer = ({ item }) => {
        return (
            <>
                <Project item={item} navigation={navigation} modif={setProjectList}/>
            </>
        )
    }

    function handleClick(){
        navigation.push('projectCreate')
        //setRefreshing(false);
    }

    function refreshButton(){
        setRefresh(!refresh)
    }

    return (
        <View style={styles.container}>
            <Button
            onPress={refreshButton}
            title='Refresh'
            />
            {/* <ButtonCreate navigation={navigation} section='project' setRefreshing={setRefreshing}></ButtonCreate> */}
            <Button
                onPress={handleClick}
                title='Create a new Project'
                color="#841584"
            />
            <FlatList
                keyExtractor={keyExtractor}
                data={projectList}
                renderItem={Renderer}
                // refreshControl={
                //     <RefreshControl refreshing={refreshing} onRefresh={handleClick} />
                // }
            />
        </View>
    )
}