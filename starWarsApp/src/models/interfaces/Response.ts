import {TypeCatalogItems} from "../types/TypeCatalogItems";

export interface Response {
    count: number,
    next: string,
    previous: string,
    results: TypeCatalogItems
}