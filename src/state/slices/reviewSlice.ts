//the recommendation to use redux toolkit instead of writing redux logic by hand, which allows you to create slices, which will automatically prefix all action names for a slice. (Also, you'll no longer need to write action types, action creators, switch-case statements or immutable logic by hand as RTK does that for you
// A few more things are implicitly done by RTK, for example createAsyncThunk will autmatically create three actions for every thunk: yourActionPrefix/pending, yourActionPrefix/fulfilled and yourActionPrefix/rejected.

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Review, ReviewState } from 'utils/types';

const initialReviewState: ReviewState = {
    reviewItems: {}
};

const reviewSlice = createSlice({
    name: 'review',
    initialState: initialReviewState,
    reducers: {
        addedToReviews: (state, { payload }: PayloadAction<Review>) => {
            state.reviewItems[payload.imdbID] =  payload;
        },
        updatedInReviews: (state, { payload }: PayloadAction<Review>) => {
            state.reviewItems[payload.imdbID] = payload;
        },
        deletedFromReviews: (state, { payload }: PayloadAction<string>) => {
            delete state.reviewItems[payload];
        }
    }
});

export const { addedToReviews, updatedInReviews, deletedFromReviews } = reviewSlice.actions;

export default reviewSlice;