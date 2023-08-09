import React from 'react';
import {View} from 'react-native';
import MyPagination from "../../../UI/MyPagination";
import {useSelector} from "react-redux";
import {selectCatalog} from "../../../../store/features/catalogSlice";
import MyLoading from "../../../UI/MyLoading";
import StarshipItem from "./StarshipItem";
import {useGetStarshipsByQueryQuery} from "../../../../store/services/catalogApi";
import {Starship} from "../../../../models/interfaces/Starship";

const StarshipsList = () => {

    const {page, queryCatalog} = useSelector(selectCatalog);

    const {
        data: response,
        isLoading,
        error
    } = useGetStarshipsByQueryQuery({page, query: queryCatalog});

    if(isLoading)
        return <MyLoading/>

    return (
        <View style={{paddingHorizontal: 10}}>
            {response!.results.map(item =>
                <StarshipItem key={item.name} starship={item as Starship}/>
            )}
            <MyPagination allItems={response!.count}/>
        </View>
    );
};

export default StarshipsList;
