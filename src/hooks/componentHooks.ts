import { useAppSelector } from 'hooks/stateHooks';
import { movieApiSlice } from 'state/slices/movieApiSlice';

export const useUpdateFetchedMovie = (): string => {
    return useAppSelector((state) => state.movie.searchValue);
};

export const useHistoryListSelector = () => {
    return useAppSelector((state) => state.history.historyItems);
};

// export const useGetMovie = (searchValue: string) => {
//     return movieApiSlice.endpoints.getMovie.useQueryState({searchValue});
// }

// export const useLazyGetMovie = () => {
//     return useLazyGetMovieQuery();
// }