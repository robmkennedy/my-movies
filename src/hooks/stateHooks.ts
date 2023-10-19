import { AppDispatch, RootState } from 'state/store';
import { useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

export const useAppDispatch = (): AppDispatch => {
    return useDispatch();
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
