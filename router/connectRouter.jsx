import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Connect } from '../views/connect';
import { Register } from '../views/register';

const Tab = createMaterialBottomTabNavigator();

export function ConnectRouter() {

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{animationEnabled:true, swipeEnabled:true}}>
                <Tab.Screen name="logIn" options={{
                title:'Log In', 
                tabBarIcon: () => (
                <MaterialCommunityIcons name="account" size={25} color="white"/>)}}
                component={Connect} />
                <Tab.Screen name="createAccount" options={{
                title:'Create an account', 
                tabBarIcon: () => (
                <MaterialCommunityIcons name="account-plus" size={25} color="white" />)}}
                component={Register} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}