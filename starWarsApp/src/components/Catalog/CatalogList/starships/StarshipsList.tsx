import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import MyPagination from "../../../UI/MyPagination";
import {useSelector} from "react-redux";
import {selectCatalog} from "../../../../store/features/catalogSlice";
import {useSortedCharacters} from "../../../../hooks/useSortedCharacters";
import MyLoading from "../../../UI/MyLoading";
import {starships} from "../../../../data/starship";
import StarshipItem from "./StarshipItem";
import {Starship} from "../../../../models/interfaces/Starship";

const StarshipsList = () => {

    const {page, query} = useSelector(selectCatalog);

    /*const {
        data = [],
        isLoading,
        error
    } = useGetStarshipsQuery({page});*/

    const sortItems = useSortedCharacters(starships, query) as Starship[];

    let isLoading = false;

    if(isLoading)
        return <MyLoading/>

    return (
        <View>
            <View style={styles.catalogSection}>
                <Text style={styles.catalogTitle}> Catalog </Text>
                {sortItems.map(item =>
                    <StarshipItem key={item.name} starship={item}/>
                )}
            </View>
            <MyPagination/>
        </View>
    );
};

const styles = StyleSheet.create({
    catalogSection: {
        paddingTop: 12,
        paddingHorizontal: 10
    },
    catalogTitle: {
        color: "black",
        fontSize: 24,
        paddingBottom: 10
    },
});

export default StarshipsList;
