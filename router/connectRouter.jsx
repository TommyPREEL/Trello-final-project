import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Connect } from '../vues/connect';
import { Register } from '../vues/register';


const Tab = createMaterialBottomTabNavigator();

export function ConnectRouter() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Connect" component={Connect} />
                <Tab.Screen name="Register" component={Register} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}