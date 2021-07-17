import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackRouts } from './stack.routes';

export function Routes(){
    return(
        <NavigationContainer>
            <StackRouts />
        </NavigationContainer>
    )
}