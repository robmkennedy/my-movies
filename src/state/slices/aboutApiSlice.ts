//the recommendation to use redux toolkit instead of writing redux logic by hand, which allows you to create slices, which will automatically prefix all action names for a slice. (Also, you'll no longer need to write action types, action creators, switch-case statements or immutable logic by hand as RTK does that for you
// A few more things are implicitly done by RTK, for example createAsyncThunk will autmatically create three actions for every thunk: yourActionPrefix/pending, yourActionPrefix/fulfilled and yourActionPrefix/rejected.

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import MovieFactory from 'model/MovieFactory';
import { AboutState, MovieResponse } from 'utils/types';
import { movieApiSlice } from './movieApiSlice';

/**
 * Create an API slice that is used to fetch the about content
 * 
 */
export const aboutApiSlice = createApi({
    reducerPath: 'aboutApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({

        getAboutContent: builder.query({
            query: () => ({
                url: `/about.md`,
                responseHandler: 'text'
            })
        })
    })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAboutContentQuery, useLazyGetAboutContentQuery } = aboutApiSlice;