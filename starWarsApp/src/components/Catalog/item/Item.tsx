import React from 'react';
import {Text, View} from 'react-native';
import {Character} from "../../../models/Character";
import {styles} from "./item.style";

interface Props {
    character: Character
}

const Item = ({character}: Props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemTitle}> {character.name} </Text>
            <View style={styles.itemInfo}>
                <Text>Gender: {character.gender}</Text>
                <Text>Home world: {character.homeworld}</Text>
                <View>
                    <Text>List films: </Text>
                    {/*{character?.films.map(film =>
                        <Text>{film}</Text>
                    )}*/}
                </View>
            </View>
        </View>
    );
};

export default Item;
