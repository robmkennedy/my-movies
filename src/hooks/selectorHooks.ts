import { useAppSelector } from 'hooks/stateHooks';

export const useLayoutSelector = () => {
    return useAppSelector((state) => state.layout);
};

export const useSearchValueSelector = () => {
    return useAppSelector((state) => state.movie.searchValue);
};

export const useReviewItemsSelector = () => {
    return useAppSelector((state) => state.review.reviewItems);
};

export const useHistoryItemsSelector = () => {
    return useAppSelector((state) => state.history.historyItems);
};