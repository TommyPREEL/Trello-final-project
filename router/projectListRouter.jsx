import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { ProjectList } from "../vues/projectList";

const Tab = createMaterialBottomTabNavigator();

export function ProjectListRouter() {
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="projectList" options={{title:'Your Projects'}} component={ProjectList} />
            {/* <Tab.Screen name="projectCreate" options={{title:'Create a new project'}} component={MyProjectCreate}/> */}
        </Tab.Navigator>
    )
}