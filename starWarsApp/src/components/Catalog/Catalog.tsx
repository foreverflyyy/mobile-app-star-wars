import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {people} from "../../data/people";
import Item from "./item/Item";
import {styles} from "./catalog.style";
import {useSortedCharacters} from "../../hooks/useSortedCharacters";

interface Props {
    query: string
}

const Catalog = ({query}: Props) => {

    const [itemsList, setItemsList] = useState(people);

    const sortItems = useSortedCharacters(itemsList, query);

    return (
        <View style={styles.catalogSection}>
            <Text style={styles.catalogTitle}> Catalog </Text>
            {sortItems.map(item =>
                <Item key={item.name} character={item}/>
            )}
        </View>
    );
};

export default Catalog;
