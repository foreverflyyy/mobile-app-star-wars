import React from 'react';
import {ScrollView, View} from 'react-native';
import Catalog from "../components/Catalog/Catalog";
import Header from "../components/UI/Header";

const HomeScreen = () => {
    return (
        <ScrollView>
            <Header titleScreen={"Home"}/>
            <Catalog/>
        </ScrollView>
    );
};

export default HomeScreen;
