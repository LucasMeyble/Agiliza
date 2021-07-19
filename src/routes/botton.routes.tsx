import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

const AppTab = createBottomTabNavigator()

import { Home } from "../screens/Home";
import { NewCalled } from "../screens/NewCalled";
import { Work } from "../screens/Work";
import { Profile } from "../screens/Profile";

export default function AuthRoutes() {
    return (

        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: any;

                    switch (route.name) {
                        case 'Home':
                            iconName = 'ios-home-outline';
                            break;
                        case 'NewCalled':
                            iconName = 'ios-duplicate-outline';
                            break;
                        case 'Work':
                            iconName = 'briefcase-outline';
                            break;
                        case 'Profile':
                            iconName = 'person-outline';
                            break;

                        default:
                            iconName = 'alert-circle-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#000000',
                inactiveTintColor: '#777',
            }}
        >
            <AppTab.Screen
                name="Home"
                component={Home}
            />
            <AppTab.Screen
                name="NewCalled"
                component={NewCalled}
            />
            <AppTab.Screen
                name="Work"
                component={Work}
            />
            <AppTab.Screen
                name="Profile"
                component={Profile}
            />
        </AppTab.Navigator>

    )
}