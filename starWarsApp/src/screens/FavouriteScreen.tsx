import React from 'react';
import {ScrollView} from 'react-native';
import MyHeader from "../components/UI/MyHeader";
import Favourite from "../components/Favourite/Favourite";

const FavouriteScreen = () => {
    return (
        <ScrollView>
            <MyHeader titleScreen={"Favourite"}/>
            <Favourite/>
        </ScrollView>
    );
};

export default FavouriteScreen;
