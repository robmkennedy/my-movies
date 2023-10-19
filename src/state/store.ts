/// rtk toolkit configurestore automatically sets up redux thunk middleware

import { configureStore } from '@reduxjs/toolkit';
import movieSlice from 'state/slices/movieSlice';
import layoutSlice from 'state/slices/layoutSlice';
import historySlice from 'state/slices/historySlice';
import { movieApiSlice } from 'state/slices/movieApiSlice';
import { loadState, saveState } from 'utils/localStorage';
import { throttle } from 'utils/helpers';

const LOCAL_STORAGE_KEY = 'my-movies.history'

const rootReducer = {
    movie: movieSlice.reducer,
    layout: layoutSlice.reducer,
    history: historySlice.reducer,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
};

const persistedObject = loadState(LOCAL_STORAGE_KEY) || {};

debugger;

const store = configureStore({
    reducer: rootReducer,
    preloadedState: { 'history': {historyItems: persistedObject} },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([movieApiSlice.middleware])
});

store.subscribe(throttle(() => {
    const objectToPersist = store.getState().history.historyItems;
    saveState(LOCAL_STORAGE_KEY, objectToPersist);
}, 1000));

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred RootState type based on root reducer: { sidePanelOpen: true }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;