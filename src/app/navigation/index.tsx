import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/mainPage';
import DetailsPage from '../pages/detailsPage';


const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name="Main" component={MainPage} />
            <Stack.Screen name="Details" component={DetailsPage} />
        </Stack.Navigator>
    );
}

export default RootStack;
