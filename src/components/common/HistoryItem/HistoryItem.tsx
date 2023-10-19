import { useTranslation } from 'react-i18next';
import Movie from 'model/Movie';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from 'hooks/stateHooks';
import { addedToHistory, deletedFromHistory } from 'state/slices/historySlice';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';

type HistoryItemProps = {
    movie: Movie;
}

const HistoryItem = ({ movie }: HistoryItemProps) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
 
    const handleClick = () => {
        dispatch(deletedFromHistory(movie));
    };

    debugger;

    return (
        <a href={`/movie/${movie.imdbID}`} className='rk-history-item'>
            {movie.title}
            <Button onClick={handleClick}>{t('page.history.buttons.delete')}</Button>
            <Button onClick={handleClick}>{t('page.history.buttons.delete')}</Button>

        </a>
    );
}

export default HistoryItem;
