import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import HeartIcon from "../assets/HeartIcon";
import HeartEmptyIcon from "../assets/HeartEmptyIcon";
import {Starship} from "../../../../models/interfaces/Starship";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "../styles/styles";
import {addFavourite, removeFavourite, selectFavourite} from "../../../../store/features/favouriteSlice";

interface Props {
    starship: Starship
}

const StarshipItem = ({starship}: Props) => {

    const {favourites} = useSelector(selectFavourite);
    const isFavourite = favourites.includes(starship);

    const dispatch = useDispatch();

    const handlerChangeFavourite = () => {
        if(isFavourite)
            dispatch(removeFavourite(starship));
        else
            dispatch(addFavourite(starship));
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}> {starship.name} </Text>
                <Text style={{color: "#243759"}}>Cost in credits: {starship.cost_in_credits}</Text>
                <Text style={{color: "#243759"}}>Length: {starship.length}</Text>
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

export default StarshipItem;
