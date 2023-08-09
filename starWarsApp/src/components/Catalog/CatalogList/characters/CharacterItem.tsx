import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import {Character} from "../../../../models/interfaces/Character";
import HeartIcon from "../assets/HeartIcon";
import HeartEmptyIcon from "../assets/HeartEmptyIcon";
import {useDispatch, useSelector} from "react-redux";
import {styles} from "../styles/styles";
import {addFavourite, removeFavourite, selectFavourite} from "../../../../store/features/favouriteSlice";

interface Props {
    character: Character
}

const CharacterItem = ({character}: Props) => {

    const {favourites} = useSelector(selectFavourite);
    const isFavourite = favourites.includes(character);

    const dispatch = useDispatch();

    const handlerChangeFavourite = () => {
        if(isFavourite)
            dispatch(removeFavourite(character));
        else
            dispatch(addFavourite(character));
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}> {character.name} </Text>
                <Text style={{color: "#243759"}}>Gender: {character.gender}</Text>
                <Text style={{color: "#243759"}}>Home world: {character.homeworld}</Text>
                <View>
                    <Text style={{color: "#243759"}}>List films: </Text>
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

export default CharacterItem;
