import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {

    return (data, state) => {

        const value = state[searchField];

        if (!value) {
            return data;
        }

        const search = value.toLowerCase();

        return data.filter(row =>
            ['date', 'customer', 'seller']
                .some(field =>
                    String(row[field]).toLowerCase().includes(search)
                )
        );
    };
}