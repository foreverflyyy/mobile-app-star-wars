import {useMemo} from "react";
import {Character} from "../models/Character";

export const useSortedCharacters = (items: Character[], query: string) => {
    return useMemo(() => {
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    }, [items, query]);
}