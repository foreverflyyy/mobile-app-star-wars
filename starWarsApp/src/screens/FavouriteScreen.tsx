import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import Header from "../components/UI/header/Header";

const FavouriteScreen = () => {

    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View>
            <Header titleScreen={"Favourite"}/>
        </View>
    );
};

export default FavouriteScreen;
