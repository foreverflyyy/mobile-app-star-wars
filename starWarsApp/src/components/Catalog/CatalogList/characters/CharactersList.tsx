import React from 'react';
import {View} from 'react-native';
import CharacterItem from "./CharacterItem";
import MyLoading from "../../../UI/MyLoading";
import {useSelector} from "react-redux";
import {selectCatalog} from "../../../../store/features/catalogSlice";
import MyPagination from "../../../UI/MyPagination";
import {Character} from "../../../../models/interfaces/Character";
import {useGetCharactersByQueryQuery} from "../../../../store/services/catalogApi";

const CharactersList = () => {

    const {page, queryCatalog} = useSelector(selectCatalog);

    const {
        data: response,
        isLoading,
        error
    } = useGetCharactersByQueryQuery({page, query: queryCatalog});

    if(isLoading)
        return <MyLoading/>

    return (
        <View style={{paddingHorizontal: 10}}>
            {response!.results.map(item =>
                <CharacterItem key={item.name} character={item as Character}/>
            )}
            <MyPagination allItems={response!.count}/>
        </View>
    );
};

export default CharactersList;
