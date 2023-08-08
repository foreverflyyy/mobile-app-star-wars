import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import MyHeader from "../components/UI/MyHeader";

const FavouriteScreen = () => {

    const navigation: NavigationProp<any> = useNavigation();

    return (
        <View>
            <MyHeader titleScreen={"Favourite"}/>
        </View>
    );
};

export default FavouriteScreen;
