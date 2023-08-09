import {useMemo} from "react";
import {TypeCatalogItems} from "../models/types/TypeCatalogItems";

export const useSortedItems = (items: TypeCatalogItems, query: string) => {
    return useMemo(() => {
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }, [items, query]);
}