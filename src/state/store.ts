/// rtk toolkit configurestore automatically sets up redux thunk middleware

import { configureStore } from '@reduxjs/toolkit';
import movieSlice from 'state/slices/movieSlice';
import layoutSlice from 'state/slices/layoutSlice';
import historySlice from 'state/slices/historySlice';
import { movieApiSlice } from 'state/slices/movieApiSlice';
import { loadState, saveState } from 'utils/localStorage';
import { throttle } from 'utils/helpers';
import reviewSlice from './slices/reviewSlice';

const LOCAL_STORAGE_KEY = 'my-movies'

const rootReducer = {
    movie: movieSlice.reducer,
    review: reviewSlice.reducer,
    layout: layoutSlice.reducer,
    history: historySlice.reducer,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
};

const initialStorage = { reviewItems: {}, historyItems: {} };

const persistedObject = loadState(LOCAL_STORAGE_KEY) || initialStorage;
const { reviewItems, historyItems } = persistedObject;


const store = configureStore({
    reducer: rootReducer,
    preloadedState: { 'review': { reviewItems }, 'history': { historyItems }, },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([movieApiSlice.middleware])
});

store.subscribe(throttle(() => {
    const objectToPersist = {
        reviewItems: store.getState().review.reviewItems,
        historyItems: store.getState().history.historyItems
    }
    saveState(LOCAL_STORAGE_KEY, objectToPersist);
}, 1000));

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred RootState type based on root reducer: { sidePanelOpen: true }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;