import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Character} from "../../../models/Character";
import HeartIcon from "./assets/HeartIcon";

interface Props {
    character: Character
}

const Item = ({character}: Props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}> {character.name} </Text>
                <Text>Gender: {character.gender}</Text>
                <Text>Home world: {character.homeworld}</Text>
                <View>
                    <Text>List films: </Text>
                    {/*{character?.films.map(film =>
                        <Text>{film}</Text>
                    )}*/}
                </View>
            </View>
            <View style={{paddingRight: 5}}>
                <HeartIcon/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderColor: "black",
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
        fontSize: 18
    },
    itemInfo: {
        marginLeft: 8
    }
})

export default Item;
