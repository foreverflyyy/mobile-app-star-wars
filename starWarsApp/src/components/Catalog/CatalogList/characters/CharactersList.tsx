import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CharacterItem from "./CharacterItem";
import {useSortedCharacters} from "../../../../hooks/useSortedCharacters";
import {people} from "../../../../data/people";
import MyLoading from "../../../UI/MyLoading";
import {useSelector} from "react-redux";
import {selectCatalog} from "../../../../store/features/catalogSlice";
import MyPagination from "../../../UI/MyPagination";
import {Character} from "../../../../models/interfaces/Character";

const CharactersList = () => {

    const {page, query} = useSelector(selectCatalog);

    /*const {
        data = [],
        isLoading,
        error
    } = useGetCatalogQuery({page});*/

    const sortItems = useSortedCharacters(people, query) as Character[];

    let isLoading = false;

    if(isLoading)
        return <MyLoading/>

    return (
        <View>
            <View style={styles.catalogSection}>
                <Text style={styles.catalogTitle}> Catalog </Text>
                {sortItems.map(item =>
                    <CharacterItem key={item.name} character={item}/>
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

export default CharactersList;
