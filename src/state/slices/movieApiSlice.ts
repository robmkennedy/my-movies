import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import MovieFactory from 'model/MovieFactory';
import { MovieResponse } from 'utils/types';

const apiKey = 'eb143593';

/**
 * Create an API slice that is used to fetch the movie
 * 
 */
export const movieApiSlice = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
    endpoints: (builder) => ({

        getMovieById: builder.query({
            query: (searchId) => `?i=${searchId}&apikey=${apiKey}`,
            transformResponse: (response: MovieResponse) => {
                return MovieFactory.parseResponse(response);
            }
        }),
        getMovieByName: builder.query({
            query: (searchName) => `?t=${searchName}&apikey=${apiKey}`,
            transformResponse: (response: MovieResponse) => {
                return MovieFactory.parseResponse(response);
            }
        })
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieByIdQuery, useLazyGetMovieByNameQuery } = movieApiSlice;