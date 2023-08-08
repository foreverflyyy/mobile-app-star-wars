import {useMemo} from "react";
import {Character} from "../models/interfaces/Character";
import {Starship} from "../models/interfaces/Starship";

export const useSortedCharacters = (items: (Character | Starship)[], query: string) => {
    return useMemo(() => {
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }, [items, query]);
}