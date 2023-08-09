import {useMemo} from "react";

export const CountingPages = (pages: number, limit: number = 10) => {
    return useMemo(() => {
        return Math.ceil(pages / limit);
    }, []);
}