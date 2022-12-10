import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StoryList } from "../views/storyList";

const Tab = createMaterialBottomTabNavigator();

export function StoryListRouter() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="storyList" options={{title:'Stories List'}} component={StoryList} />
        </Tab.Navigator>
    )
}