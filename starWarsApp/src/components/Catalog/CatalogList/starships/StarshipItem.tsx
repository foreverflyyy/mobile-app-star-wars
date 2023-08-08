import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeartIcon from "../assets/HeartIcon";
import {Starship} from "../../../../models/interfaces/Starship";

interface Props {
    starship: Starship
}

const StarshipItem = ({starship}: Props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}> {starship.name} </Text>
                <Text>Cost in credits: {starship.cost_in_credits}</Text>
                <Text>Length: {starship.length}</Text>
                <View>
                    <Text>List pilots: </Text>
                    {/*{character?.films.ts.map(film =>
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

export default StarshipItem;
