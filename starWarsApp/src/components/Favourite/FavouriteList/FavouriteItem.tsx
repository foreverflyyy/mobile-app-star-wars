import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Character} from "../../../models/interfaces/Character";
import {Starship} from "../../../models/interfaces/Starship";
import HeartIcon from "../../Catalog/CatalogList/assets/HeartIcon";
import HeartEmptyIcon from "../../Catalog/CatalogList/assets/HeartEmptyIcon";
import {useDispatch, useSelector} from "react-redux";
import {addFavourite, removeFavourite, selectFavourite} from "../../../store/features/favouriteSlice";

const FavouriteItem = ({item}: {item: Character | Starship}) => {

    const {favourites} = useSelector(selectFavourite);
    const isFavourite = favourites.includes(item);

    const dispatch = useDispatch();

    const handlerChangeFavourite = () => {
        if(isFavourite)
            dispatch(removeFavourite(item));
        else
            dispatch(addFavourite(item));
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}> {item.name} </Text>
                <View>
                    <Text style={{color: "#243759"}}>List pilots: </Text>
                    {/*{character?.films.ts.map(film =>
                        <Text>{film}</Text>
                    )}*/}
                </View>
            </View>
            <TouchableHighlight
                style={{paddingRight: 5}}
                onPress={handlerChangeFavourite}
            >
                {isFavourite ? <HeartIcon/> : <HeartEmptyIcon/>}
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderColor: "#243759",
        borderWidth: 2,
        borderRadius: 4,
        borderStyle: "solid",
        padding: 5,
        marginVertical: 7,
        marginHorizontal: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    itemTitle: {
        fontSize: 18,
        color: "#243759"
    },
    itemInfo: {
        marginLeft: 8
    }
})

export default FavouriteItem;
