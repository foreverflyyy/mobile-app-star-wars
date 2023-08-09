import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CatalogScreen from "../screens/CatalogScreen";
import FavouriteScreen from "../screens/FavouriteScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Catalog"} component={CatalogScreen} options={{headerShown: false}}/>
                <Stack.Screen name={"Favourite"} component={FavouriteScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
