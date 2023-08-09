import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyInput from "../UI/MyInput";

interface Props {
    query: string,
    setQuery: (value: string) => void;
}

const SearchForm = ({query, setQuery}: Props) => {
    return (
        <View style={styles.searchForm}>
            <Text style={styles.searchTitle}>
                Search items:
            </Text>
            <MyInput
                value={query}
                onChangeText={text => setQuery(text)}
                placeholder={"Enter for search..."}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchForm: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#243759",
        paddingBottom: 5,
        margin: 10
    },
    searchTitle: {
        fontSize: 24,
        fontWeight: "500",
        color: "#243759",
        paddingTop: 10,
        paddingHorizontal: 10
    }
})

export default SearchForm;
