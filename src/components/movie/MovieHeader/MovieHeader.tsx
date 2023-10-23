import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import PageTitle from 'components/common/PageTitle/PageTitle';
import PageHeader from 'components/common/PageHeader/PageHeader';
import { useAppDispatch } from 'hooks/stateHooks';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';
import { addedToHistory, deletedFromHistory } from 'state/slices/historySlice';
import { deletedFromReviews } from 'state/slices/reviewSlice';
import { Movie } from 'utils/types';
import './MovieHeader.scss';

type MovieHeaderProps = {
    movie: Movie;
};

/**
 * A component used for the header of the Movie page. Unlike the other pages
 * that just have a title, the MoviePage header also contains the buttons used to 
 * add / delete the movie from the viewing history.
 * Note in the handleRemoveClick, if the user deletes the movie from the viewing history,
 * then the corresponding review is also deleted from local storage.
 */
const MovieHeader = ({ movie }: MovieHeaderProps) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const historyItems = useHistoryItemsSelector();
    const existingMovie = historyItems[movie.imdbID];

    const handleAddClick = () => {
        dispatch(addedToHistory(movie));
    };

    const handleRemoveClick = () => {
        dispatch(deletedFromHistory(movie.imdbID));
        dispatch(deletedFromReviews(movie.imdbID));
    };

    let buttonContent = null;
    if (existingMovie) {
        buttonContent = <Button variant='outline-danger' onClick={handleRemoveClick}>{t('page.movie.buttons.remove')}</Button>;
    }
    else {
        buttonContent = <Button variant='outline-primary' onClick={handleAddClick}>{t('page.movie.buttons.add')}</Button>
    }

    return (
        <PageHeader>
            <PageTitle title={movie.title} />
            {buttonContent}
        </PageHeader>
    );
}

export default MovieHeader;

