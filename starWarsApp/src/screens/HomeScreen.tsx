import React from 'react';
import {ScrollView, View} from 'react-native';
import Catalog from "../components/Catalog/Catalog";
import MyHeader from "../components/UI/MyHeader";

const HomeScreen = () => {
    return (
        <ScrollView>
            <MyHeader titleScreen={"Home"}/>
            <Catalog/>
        </ScrollView>
    );
};

export default HomeScreen;
