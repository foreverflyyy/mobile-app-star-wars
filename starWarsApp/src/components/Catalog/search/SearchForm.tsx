import React from 'react';

import {Text, View} from 'react-native';
import MyInput from "../../UI/MyInput";

interface Props {
    query: string,
    setQuery: (value: string) => void;
}

const SearchForm = ({query, setQuery}: Props) => {

    return (
        <View>
            <Text style={{fontSize: 22, paddingTop: 10, paddingHorizontal: 10}}>Search item:</Text>
            <MyInput
                value={query}
                onChangeText={text => setQuery(text)}
                placeholder={"Enter for search..."}
            />
        </View>
    );
};

export default SearchForm;
