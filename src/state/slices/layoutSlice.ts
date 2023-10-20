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
        sidePanelOpened: (state) => {
            state.sidePanelOpen = true;
        },
        sidePanelClosed: (state) => {
            state.sidePanelOpen = false;
        },
        sidePanelToggled: (state) => {
            state.sidePanelOpen = !state.sidePanelOpen;
        }
    }
});

export const { sidePanelOpened, sidePanelClosed, sidePanelToggled } = layoutSlice.actions;

export default layoutSlice;