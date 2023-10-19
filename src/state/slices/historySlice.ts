//the recommendation to use redux toolkit instead of writing redux logic by hand, which allows you to create slices, which will automatically prefix all action names for a slice. (Also, you'll no longer need to write action types, action creators, switch-case statements or immutable logic by hand as RTK does that for you
// A few more things are implicitly done by RTK, for example createAsyncThunk will autmatically create three actions for every thunk: yourActionPrefix/pending, yourActionPrefix/fulfilled and yourActionPrefix/rejected.

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Movie from 'model/Movie';
import { HistoryState } from 'utils/types';

const initialHistoryState: HistoryState = {
    historyItems: {}
};

const historySlice = createSlice({
    name: 'history',
    initialState: initialHistoryState,
    reducers: {
        addedToHistory: (state, { payload }: PayloadAction<Movie>) => {
            state.historyItems[payload.imdbID] =  payload;
        },
        updatedInHistory: (state, { payload }: PayloadAction<Movie>) => {
            state.historyItems[payload.imdbID] = payload;
        },
        deletedFromHistory: (state, { payload }: PayloadAction<Movie>) => {
            delete state.historyItems[payload.imdbID];
        }
    }
});

export const { addedToHistory, updatedInHistory, deletedFromHistory } = historySlice.actions;

export default historySlice;