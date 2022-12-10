import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, View, Text, Button, TouchableOpacity } from "react-native";
import { statusAll } from "../api/status";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Status } from "../components/status";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => item.id

export function StatusList({ navigation }) {
    const [statusList, setStatusList] = useState([]);
    const { user, currentProject } = useContext(ProjectContext)
    // const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        statusAll(user.uid, currentProject).then(data => {
            setStatusList([...data])
        }).catch(err => console.log(err))

    }, []);

    // useEffect(() => {
    //     statusAll(user.uid, currentProject).then(data => {
    //         setStatusList([...data])
    //     }).catch(err => console.log(err))
    // }, [refresh]);

    function handleClick(){
        navigation.push('statusCreate', {modif:setStatusList})
    }

    // function refreshButton(){
    //     setRefresh(!refresh)
    // }

    const Renderer = ({ item }) => {
        return (
            <>
                <Status item={item} navigation={navigation} modif={setStatusList}/>
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
                data={statusList}
                renderItem={Renderer}
            />
            <TouchableOpacity onPress={handleClick} style={styles.buttonCreateStatus}>
                <Text><MaterialCommunityIcons name="plus-circle" size={80} color="#8e38b9"/></Text>
            </TouchableOpacity>
        </View>
    )
}