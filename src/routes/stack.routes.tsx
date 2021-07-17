import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Home } from '../screens/Home'; 

export function StackRouts(){
    return(
        <Stack.Navigator
            headerMode = "none"
        >
            <Stack.Screen 
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
    )
}