import { useAppSelector } from 'hooks/stateHooks';

export const useUpdateFetchedMovie = () => {
    return useAppSelector((state) => state.movie.searchValue);
};

export const useHistoryListSelector = () => {
    return useAppSelector((state) => state.history.historyItems);
};