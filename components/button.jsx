
import { Button, ListItem } from "@rneui/themed";
import { useContext, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { projectCreate } from "../api/project";
import { ProjectContext } from "../context";

export function ButtonAdd({ navigation, section, projectName, setRefreshing }) {
    const { user } = useContext(ProjectContext)

    function handleClick() {
        switch(section){
            case 'project':
                projectCreate(user.uid, projectName).then(data => {
                    setProjectList([...data])
                }).catch(err => {
                    console.log(err);
                })
                break;
    
            case 'status':
                
                break;
    
            case 'story':
                
                break;
        }
        setRefreshing(false);
        navigation.goBack()
    }

    return (
        <View>
            <Button
                onPress={handleClick}
                title={'Create a new ' + section}
                color="#841584"
            />
        </View>
    )
}

export function ButtonCreate({ navigation, section }) {

    function handleClick() {
        switch(section){
            case 'project':
                navigation.push('projectCreate')
                break;

            case 'status':
                navigation.push('statusCreate')
                break;

            case 'story':
                navigation.push('storyCreate')
                break;
        }
    }

    return (
        <View>
            <Button
                onPress={handleClick}
                title={'Create a new ' + section}
                color="#841584"
            />
        </View>
    )
}