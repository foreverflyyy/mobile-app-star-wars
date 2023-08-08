import React from 'react';
import {Text, View} from 'react-native';
import MyInput from "../UI/MyInput";
import {useDispatch, useSelector} from "react-redux";
import {selectCatalog, setQuery} from "../../store/features/catalogSlice";

const SearchForm = () => {

    const {query} = useSelector(selectCatalog);
    const dispatch = useDispatch();

    return (
        <View>
            <Text style={{fontSize: 22, paddingTop: 10, paddingHorizontal: 10}}>Search item:</Text>
            <MyInput
                value={query}
                onChangeText={text => dispatch(setQuery(text))}
                placeholder={"Enter for search..."}
            />
        </View>
    );
};

export default SearchForm;
