import { useEffect } from "react";
import { useContext, useState } from "react";
import { Alert, FlatList, View, Text, Button } from "react-native";
import { statusAll } from "../api/status";

import { Status } from "../components/status";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => item.id

export function StatusList({ navigation }) {
    const [statusList, setStatusList] = useState([]);
    const { user, currentProject } = useContext(ProjectContext)
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        statusAll(user.uid, currentProject).then(data => {
            setStatusList([...data])
        }).catch(err => console.log(err))

    }, []);

    useEffect(() => {
        statusAll(user.uid, currentProject).then(data => {
            setStatusList([...data])
        }).catch(err => console.log(err))
    }, [refresh]);

    function handleClick(){
        navigation.push('statusCreate')
    }

    function refreshButton(){
        setRefresh(!refresh)
    }

    const Renderer = ({ item }) => {
        return (
            <>
                <Status item={item} navigation={navigation} modif={setStatusList}/>
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
                title='Create a new Status'
                color="#841584"
            />
            <FlatList
                keyExtractor={keyExtractor}
                data={statusList}
                renderItem={Renderer}
            />
        </View>
    )
}