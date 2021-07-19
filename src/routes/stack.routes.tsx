import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AuthRoutes from './botton.routes';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterS2 } from '../screens/RegisterStep2';
import { RegisterS3 } from '../screens/RegisterStep3';
import { RegisterS4 } from '../screens/RegisterStep4';
import { Search } from '../screens/Search';

export function StackRouts() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
            <Stack.Screen
                name="RegisterS2"
                component={RegisterS2}
            />
            <Stack.Screen
                name="RegisterS3"
                component={RegisterS3}
            />
            <Stack.Screen
                name="RegisterS4"
                component={RegisterS4}
            />
            <Stack.Screen
                name="Home"
                component={AuthRoutes}
            />
            <Stack.Screen
                name="Search"
                component={Search}
            />

        </Stack.Navigator>
    )
}