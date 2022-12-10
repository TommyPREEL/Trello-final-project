import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, View, Text, Button, TouchableOpacity } from "react-native";
import { RefreshControl } from "react-native-gesture-handler";
import { projectAll } from "../api/project";
import { ButtonCreate } from "../components/button";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Project } from "../components/project";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => item.id

export function ProjectList({ navigation }) {
    const [projectList, setProjectList] = useState([]);
    const { user } = useContext(ProjectContext)
    // const [refresh, setRefresh] = useState(true);

    //const [refreshing, setRefreshing] = useState(true);

    useEffect(() => {
        projectAll(user.uid).then(data => {
            setProjectList([...data])
        }).catch(err => console.log(err))
    }, []);

    // useEffect(() => {
    //     projectAll(user.uid).then(data => {
    //         setProjectList([...data])
    //     }).catch(err => console.log(err))
    // }, [refresh]);


    const Renderer = ({ item }) => {
        return (
            <>
                <Project item={item} navigation={navigation} modif={setProjectList}/>
            </>
        )
    }

    function handleClick(){
        navigation.push('projectCreate', {modif:setProjectList})
        //setRefreshing(false);
    }

    // function refreshButton(){
    //     setRefresh(!refresh)
    // }

    return (
        <View style={styles.appContainer}>
            {/* <Button
            onPress={refreshButton}
            title='Refresh'
            /> */}
            {/* <ButtonCreate navigation={navigation} section='project' setRefreshing={setRefreshing}></ButtonCreate> */}
            <FlatList
                keyExtractor={keyExtractor}
                data={projectList}
                renderItem={Renderer}
                // refreshControl={
                //     <RefreshControl refreshing={refreshing} onRefresh={handleClick} />
                // }
            />
            <TouchableOpacity onPress={handleClick} style={styles.buttonCreateProject}>
                <Text><MaterialCommunityIcons name="plus-circle" size={80} color="#ffa634"/></Text>
            </TouchableOpacity>
        </View>
    )
}