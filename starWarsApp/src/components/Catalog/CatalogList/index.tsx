import React from 'react';
import {TypeCatalog} from "../../../models/enums/TypeCatalog";
import CharactersList from "./characters/CharactersList";
import StarshipsList from "./starships/StarshipsList";
import {useSelector} from "react-redux";
import {selectCatalog} from "../../../store/features/catalogSlice";

const CatalogList = () => {

    const {typeCatalog} = useSelector(selectCatalog);

    switch(typeCatalog) {
        case TypeCatalog.Characters: {
            return <CharactersList/>
        }
        case TypeCatalog.Starships: {
            return <StarshipsList/>
        }
        default: return null
    }
};

export default CatalogList;
