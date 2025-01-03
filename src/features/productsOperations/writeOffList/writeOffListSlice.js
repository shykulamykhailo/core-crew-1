import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { insetWriteOffListInSupabse } from '../../../services/apiWriteOff';

const writeOffListSlice = createSlice({
    name: 'writeOffList',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addProductInWriteOffList(state, action) {
            state.items.push(action.payload);
        },
        removeProductFromWriteOffList(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        clearWriteOffList(state) {
            state.items = [];
        },
        setLoadingWriteOff(state, action) {
            state.isLoading = action.payload;
        },
        setErrorWriteOff(state, action) {
            state.error = action.payload;
        },
    },
});

export const submitWriteOffList = createAsyncThunk(
    'writeOffList/submitWriteOffList',
    async (_, { getState, dispatch }) => {
        const { items } = getState().writeOffList;
        console.log(items);

        dispatch(setLoadingWriteOff(true));

        const { data, error } = await insetWriteOffListInSupabse(items);

        if (error) {
            dispatch(setErrorWriteOff(error.message));
        } else {
            dispatch(clearWriteOffList());
        }

        dispatch(setLoadingWriteOff(false));
    }
);

export const {
    addProductInWriteOffList,
    removeProductFromWriteOffList,
    clearWriteOffList,
    setLoadingWriteOff,
    setErrorWriteOff,
} = writeOffListSlice.actions;

export default writeOffListSlice.reducer;
