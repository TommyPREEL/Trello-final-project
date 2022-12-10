import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StatusList } from "../views/statusList";

const Tab = createMaterialBottomTabNavigator();

export function StatusListRouter() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="statusList" options={{title:'Status List'}} component={StatusList} />
        </Tab.Navigator>
    )
}