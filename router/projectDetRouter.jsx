import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { ProjectDet } from "../vues/projectDet";
import { CreateProjectDet } from "../vues/statusCreate";

const Tab = createMaterialBottomTabNavigator();

export function ProjectDetRouter() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Detail" component={ProjectDet} />
            <Tab.Screen name="createStatus" component={CreateProjectDet} />
        </Tab.Navigator>
    )
}