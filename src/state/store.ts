import { configureStore } from '@reduxjs/toolkit';
import reviewSlice from './slices/reviewSlice';
import movieSlice from 'state/slices/movieSlice';
import layoutSlice from 'state/slices/layoutSlice';
import historySlice from 'state/slices/historySlice';
import { movieApiSlice } from 'state/slices/movieApiSlice';
import { aboutApiSlice } from './slices/aboutApiSlice';
import { throttle } from 'utils/helpers';
import { loadState, saveState } from 'utils/localStorage';
import sampleState from './sample-movies.json';

// The key used for the app data in local Storage.
const LOCAL_STORAGE_KEY = 'my-movies'

// The root reducer for the store.
const rootReducer = {
    movie: movieSlice.reducer,
    review: reviewSlice.reducer,
    layout: layoutSlice.reducer,
    history: historySlice.reducer,
    [aboutApiSlice.reducerPath]: aboutApiSlice.reducer,
    [movieApiSlice.reducerPath]: movieApiSlice.reducer,
};

// const initialStorage = { reviewItems: {}, historyItems: {} };
const initialStorage = sampleState;

// Load the current reviews and history from local storage.
// If it is empty, use the sample data built in the app.
const persistedObject = loadState(LOCAL_STORAGE_KEY) || initialStorage;
const { reviewItems, historyItems } = persistedObject;

/**
 * Setup the redux store. This automatically sets up the redux thunk middleware. We also add
 * the middleware for querying the movie API and querying the about markdown file.
 */
const store = configureStore({
    reducer: rootReducer,
    preloadedState: { 'review': { reviewItems }, 'history': { historyItems }, },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([aboutApiSlice.middleware, movieApiSlice.middleware])
});

/**
 * Subscribe to updates to the store. When an update occurs, we persist only the reviewItem and the
 * history items to local storage. These updates can happen quickly, therefore we throttle the persist
 * function.
 */
store.subscribe(throttle(() => {
    const objectToPersist = {
        reviewItems: store.getState().review.reviewItems,
        historyItems: store.getState().history.historyItems
    }
    saveState(LOCAL_STORAGE_KEY, objectToPersist);
}, 1000));

// Infer the `RootState` type from the store itself. The inferred RootState type is based on the root reducer.
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function. Call this AppDispatch as recommended by redux toolkit.
export type AppDispatch = typeof store.dispatch;

export default store;