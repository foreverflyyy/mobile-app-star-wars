import React from 'react';
import {ScrollView} from 'react-native';
import Catalog from "../components/Catalog/Catalog";
import MyHeader from "../components/UI/MyHeader";

const CatalogScreen = () => {
    return (
        <ScrollView>
            <MyHeader titleScreen={"Home"}/>
            <Catalog/>
        </ScrollView>
    );
};

export default CatalogScreen;
