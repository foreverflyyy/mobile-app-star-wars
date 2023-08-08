import React, {useState} from 'react';
import {View} from 'react-native';
import SearchForm from "./SearchForm";
import CatalogList from "./CatalogList";
import CatalogSelect from "./CatalogSelect";

const Catalog = () => {
    return (
        <View>
            <SearchForm/>
            <CatalogSelect/>
            <CatalogList/>
        </View>
    );
};

export default Catalog;
