import React, {useState} from 'react';
import {View} from 'react-native';
import SearchForm from "../components/SearchForm";
import Catalog from "../components/Catalog/Catalog";
import Header from "../components/UI/header/Header";

const HomeScreen = () => {

    const [query, setQuery] = useState("");

    return (
        <View>
            <Header titleScreen={"Home"}/>
            <SearchForm
                query={query}
                setQuery={setQuery}
            />
            <Catalog query={query}/>
        </View>
    );
};

export default HomeScreen;
