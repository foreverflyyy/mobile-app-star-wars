import React, {useEffect, useState} from "react";
import {View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import FavouritesList from "./FavouriteList/FavouritesList";
import {selectFavourite, setQueryFavourite} from "../../store/features/favouriteSlice";
import SearchForm from "../Forms/SearchForm";
import useDebounce from "../../hooks/useDebounce";

const Favourite = () => {

    const {queryFavourite} = useSelector(selectFavourite);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState(queryFavourite);
    const debounce = useDebounce(searchValue);

    useEffect(() => {
        dispatch(setQueryFavourite(debounce))
    }, [debounce]);

    return (
        <View>
            <SearchForm
                query={searchValue}
                setQuery={value => setSearchValue(value)}
            />
            <FavouritesList/>
        </View>
    );
};

export default Favourite;
