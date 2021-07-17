import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AuthRoutes from './botton.routes';

import { Home } from '../screens/Home'; 
import { Login } from '../screens/Login';

export function StackRouts(){
    return(
        <Stack.Navigator
            headerMode = "none"
        >
            <Stack.Screen 
                name="Home"
                component={AuthRoutes}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}