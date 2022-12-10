import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StoryList } from "../views/storyList";
import { styles } from "../styles";

const Tab = createMaterialBottomTabNavigator();

export function StoryListRouter() {

    return (
        <Tab.Navigator barStyle={styles.storyListRouterTabNavigator}>
            <Tab.Screen name="storyList" options={{
                title:'Stories List', 
                tabBarIcon: () => (
                <MaterialCommunityIcons name="clipboard-list" size={25} color="white"/>)}}
            component={StoryList} />
        </Tab.Navigator>
    )
}