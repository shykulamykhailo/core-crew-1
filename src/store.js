import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist/es/constants';
import authReducer from './features/authentication/authSlice';
import productsReducer from './features/productsOperations/productsData/productsSlice';
import invoiceReducer from './features/productsOperations/invoices/invoiceSlice';
import writeOffListReducer from './features/productsOperations/writeOffList/writeOffListSlice';
import newsReducer from './features/news/newsSlice';
import workScheduleReducer from './features/workSchedule/workScheduleSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    invoice: invoiceReducer,
    writeOffList: writeOffListReducer,
    news: newsReducer,
    workSchedule: workScheduleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
export default store;
