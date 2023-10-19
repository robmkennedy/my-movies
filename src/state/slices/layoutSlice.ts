//the recommendation to use redux toolkit instead of writing redux logic by hand, which allows you to create slices, which will automatically prefix all action names for a slice. (Also, you'll no longer need to write action types, action creators, switch-case statements or immutable logic by hand as RTK does that for you
// A few more things are implicitly done by RTK, for example createAsyncThunk will autmatically create three actions for every thunk: yourActionPrefix/pending, yourActionPrefix/fulfilled and yourActionPrefix/rejected.

import { createSlice } from '@reduxjs/toolkit';
import { LayoutState } from 'utils/types';

const initialLayoutState: LayoutState = {
    sidePanelOpen: true
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState: initialLayoutState,
    reducers: {
        sidePanelToggled: (state, { payload }) => {
            state.sidePanelOpen = !payload;
        }
    }
});

export const { sidePanelToggled } = layoutSlice.actions;

export default layoutSlice;