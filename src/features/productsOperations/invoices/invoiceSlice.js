import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { insetInvoiceInSupabse } from '../../../services/apiInvoice';
import toast from 'react-hot-toast';

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        addProductInInvoice(state, action) {
            state.items.push(action.payload);
        },
        removeProductFromList(state, action) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        clearInvoice(state) {
            state.items = [];
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            toast.error('Error');
        },
    },
});

export const submitInvoice = createAsyncThunk(
    'invoice/submitInvoice',
    async (_, { getState, dispatch }) => {
        const { items } = getState().invoice;
        console.log(items);

        dispatch(setLoading(true));

        const { data, error } = await insetInvoiceInSupabse(items);

        if (error) {
            dispatch(setError(error.message));
        } else {
            dispatch(clearInvoice());
        }

        toast.success('Invoice added!');
        dispatch(setLoading(false));
    }
);

export const {
    addProductInInvoice,
    removeProductFromList,
    clearInvoice,
    setLoading,
    setError,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
