import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProjectListRouter } from './projectListRouter';
import { ProjectEdit } from '../views/projectEdit';
import { StatusEdit } from '../views/statusEdit';
import { StatusListRouter } from './statusListRouter.jsx';
import { StoryListRouter } from './storyListRouter.jsx';
import { StoryDetails } from '../views/storyDetails.jsx';
import { ProjectCreate } from '../views/projectCreate.jsx';
import { StatusCreate } from "../views/statusCreate";
import { StoryCreate } from "../views/storyCreate";
import { StoryEdit } from '../views/storyEdit';

const Stack = createStackNavigator();

export function ProjectRouter() {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                {/* All about Project */}
                <Stack.Screen name="projectListRouter" options={{title:'Projects List'}} component={ProjectListRouter} />
                <Stack.Screen name="projectCreate" options={{title:'Create a new project'}} component={ProjectCreate} />
                <Stack.Screen name="projectEdit" component={ProjectEdit} />

                {/* All about Status */}
                <Stack.Screen name="statusListRouter" component={StatusListRouter} />
                <Stack.Screen name="statusCreate" options={{title:'Create a new status'}} component={StatusCreate} />
                <Stack.Screen name="statusEdit" component={StatusEdit} />

                {/* All about Story */}
                <Stack.Screen name="storyListRouter" component={StoryListRouter} />
                <Stack.Screen name="storyCreate" options={{title:'Create a new story'}} component={StoryCreate} />
                <Stack.Screen name="storyEdit" component={StoryEdit} />
                <Stack.Screen name="storyDetails" component={StoryDetails} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}