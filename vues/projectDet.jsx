import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { getAllPhotos } from "../api/photo";
import { Photo } from "../components/photo";
import { ProjectContext } from "../context";
import { styles } from "../styles";

const keyExtractor = (item, index) => index.toString()

export function ProjectDet() {
    const [photos, setPhotos] = useState([]);

    const { user, currentProject } = useContext(ProjectContext);

    useEffect(() => {
        getAllPhotos(user.uid, ProjectDet).then(data => {
            setPhotos(data)
        }).catch(err => {
            console.log(err)
        })

    }, []);

    return (

        <View style={styles.container}>
            <FlatList
                keyExtractor={keyExtractor}
                data={photos}
                renderItem={Photo}
            />
        </View>
    )
}