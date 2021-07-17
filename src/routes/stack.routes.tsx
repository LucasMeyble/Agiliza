import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AuthRoutes from './botton.routes';

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterS2 } from '../screens/RegisterStep2';

export function StackRouts() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen
                name="Home"
                component={AuthRoutes}
            />
            <Stack.Screen
                name="RegisterS2"
                component={RegisterS2}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    )
}