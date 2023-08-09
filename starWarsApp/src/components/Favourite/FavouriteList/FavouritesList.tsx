import {useCallback, useState} from "react";
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from "react-redux";
import FavouriteItem from "./FavouriteItem";
import {selectFavourite} from "../../../store/features/favouriteSlice";
import {useSortedItems} from "../../../hooks/useSortedItems";

const FavouritesList = () => {

    const {favourites, query} = useSelector(selectFavourite);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const sortedItems = useSortedItems(favourites, query);

    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
            <Text style={styles.favouriteTitle}>Your favourite items:</Text>
            {sortedItems?.map(item => (
                <FavouriteItem key={item.name} item={item}/>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    favouriteTitle: {
        fontSize: 24,
        paddingVertical: 10,
        paddingHorizontal: 8,
        color: "#243759",
        fontWeight: "500"
    }
})

export default FavouritesList;
