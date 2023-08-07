import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {people} from "../../data/people";
import Item from "./item/Item";
import {styles} from "./catalog.style";
import {useSortedCharacters} from "../../hooks/useSortedCharacters";
import {useGetCatalogQuery} from "../../store/services/catalogApi";
import SearchForm from "./search/SearchForm";
import MyLoading from "../UI/MyLoading";

const Catalog = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");

    /*const {
        data = [],
        isLoading,
        error
    } = useGetCatalogQuery({page: currentPage});*/

    const isLoading = false;

    const sortItems = useSortedCharacters(people, query);

    if(isLoading)
        return <MyLoading/>

    return (
        <View>
            <SearchForm
                query={query}
                setQuery={setQuery}
            />
            <View style={styles.catalogSection}>
                <Text style={styles.catalogTitle}> Catalog </Text>
                {sortItems.map(item =>
                    <Item key={item.name} character={item}/>
                )}
            </View>
        </View>
    );
};

export default Catalog;
