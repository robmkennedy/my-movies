//the recommendation to use redux toolkit instead of writing redux logic by hand, which allows you to create slices, which will automatically prefix all action names for a slice. (Also, you'll no longer need to write action types, action creators, switch-case statements or immutable logic by hand as RTK does that for you
// A few more things are implicitly done by RTK, for example createAsyncThunk will autmatically create three actions for every thunk: yourActionPrefix/pending, yourActionPrefix/fulfilled and yourActionPrefix/rejected.

import { createSlice } from '@reduxjs/toolkit';
import { MovieState } from 'utils/types';

const initialMovieState: MovieState = {
    searchValue: ''
};

const movieSlice = createSlice({
    name: 'movie',
    initialState: initialMovieState,
    reducers: {
        movieSearched: (state, { payload }) => {
            state.searchValue = payload;
        }
    }
});

export const { movieSearched } = movieSlice.actions;

export default movieSlice;