import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchForm from "../Forms/SearchForm";
import CatalogList from "./CatalogList";
import CatalogSelect from "./CatalogSelect";
import {useDispatch, useSelector} from "react-redux";
import {selectCatalog, setQueryCatalog} from "../../store/features/catalogSlice";

const Catalog = () => {

    const {queryCatalog} = useSelector(selectCatalog);
    const dispatch = useDispatch();

    return (
        <View>
            <SearchForm
                query={queryCatalog}
                setQuery={value => dispatch(setQueryCatalog(value))}
            />
            <View style={styles.headerCatalog}>
                <Text style={styles.catalogTitle}> Catalog </Text>
                <CatalogSelect/>
            </View>
            <CatalogList/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerCatalog: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },
    catalogTitle: {
        fontSize: 24,
        paddingBottom: 10,
        color: "#243759",
        fontWeight: "500"
    }
})

export default Catalog;
