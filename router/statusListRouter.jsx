import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusList } from "../views/statusList";
import { styles } from "../styles";

const Tab = createMaterialBottomTabNavigator();

export function StatusListRouter() {

    return (
        <Tab.Navigator barStyle={styles.statusListRouterTabNavigator}>
            <Tab.Screen name="statusList" options={{
                title:'Status List', 
                tabBarIcon: () => (
                <MaterialCommunityIcons name="clipboard-list" size={25} color="white"/>)}}
            component={StatusList} />
        </Tab.Navigator>
    )
}