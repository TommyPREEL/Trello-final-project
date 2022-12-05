import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StoryList } from "../vues/storyList";

const Tab = createMaterialBottomTabNavigator();

export function StoryListRouter() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="storyList" options={{title:'List of stories'}} component={StoryList} />
        </Tab.Navigator>
    )
}