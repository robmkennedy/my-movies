import { useAppSelector } from 'hooks/stateHooks';

// Select the state of the sidebar (open / closed)
export const useLayoutSelector = () => {
    return useAppSelector((state) => state.layout);
};

// Select the search value that the user typed
export const useSearchValueSelector = () => {
    return useAppSelector((state) => state.movie.searchValue);
};

// Select the list of review history items
export const useReviewItemsSelector = () => {
    return useAppSelector((state) => state.review.reviewItems);
};

// Select the list of viewing history items
export const useHistoryItemsSelector = () => {
    return useAppSelector((state) => state.history.historyItems);
};