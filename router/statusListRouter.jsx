import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusList } from "../vues/statusList";

const Tab = createMaterialBottomTabNavigator();

export function StatusListRouter() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="statusList" options={{title:'List of status'}} component={StatusList} />
        </Tab.Navigator>
    )
}