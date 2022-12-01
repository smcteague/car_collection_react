import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        make: 'Honda',
        model: 'CRV',
        year: '2022',
        color: 'White',
        mileage: 10000.00,
        price: 40000.00,
    },
    reducers: {
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseColor: (state, action) => {state.color = action.payload},
        chooseMileage: (state, action) => {state.mileage = action.payload},
        choosePrice: (state, action) => {state.price = action.payload}
    },
});

export const reducer = rootSlice.reducer;
export const {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseColor,
    chooseMileage,
    choosePrice
} = rootSlice.actions;

