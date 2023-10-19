import { useAppSelector } from 'hooks/stateHooks';

export const useSearchValueSelector = (): string => {
    return useAppSelector((state) => state.movie.searchValue);
};

// export const useSelectedMovieSelector = () => {
//     return useAppSelector((state) => state.movie.selectedMovie);
// };

export const useHistoryItemsSelector = () => {
    return useAppSelector((state) => state.history.historyItems);
};