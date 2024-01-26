import { createSlice } from "@reduxjs/toolkit";

const favoriteCurrenciesSlice = createSlice({
    name: "Favorite Currencies",
    initialState: {
        favoriteCurrencies: [],
    },
    reducers: {
        ADD_TO_FAVORITES: (state, action) => {
            state.favoriteCurrencies = [
                ...state.favoriteCurrencies,
                action.payload,
            ];
        },
        REMOVE_FROM_FAVORITES: (state, action) => {
            state.favoriteCurrencies = state.favoriteCurrencies.filter(
                (currency) => currency.id !== action.payload.id
            );
        },
    },
});

const { actions, reducer } = favoriteCurrenciesSlice;

export {
    actions as favoriteCurrenciesActions,
    reducer as favoriteCurrenciesReducer,
};
