import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProjectList } from "../views/projectList";
import { LogOut } from "../views/logOut";
import { styles } from "../styles";

const Tab = createMaterialBottomTabNavigator();

export function ProjectListRouter() {

    return (
        <Tab.Navigator screenOptions={{animationEnabled:true, swipeEnabled:true}} barStyle={styles.projectListRouterTabNavigator}>
            <Tab.Screen name="projectList" options={{
                title:'Projects List', 
                tabBarIcon: () => (
                <MaterialCommunityIcons name="clipboard-text" size={25} color="white"/>)}}
            component={ProjectList} />
            {/* <Tab.Screen name="projectCreate" options={{title:'Create a new project'}} component={MyProjectCreate}/> */}
            <Tab.Screen name="logOut" options={{
                title:'Log Out',
                tabBarIcon: () => (
                <MaterialCommunityIcons name="logout" size={25} color="white"/>)}}
            component={LogOut} />
        </Tab.Navigator>
    )
}
// clipboard-list