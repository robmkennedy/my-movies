import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useReviewItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { Button } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useAppDispatch } from 'hooks/stateHooks';
import { addedToHistory, deletedFromHistory, updatedInHistory } from 'state/slices/historySlice';

import './MovieHeader.scss';
import { Movie } from 'utils/types';
import { deletedFromReviews } from 'state/slices/reviewSlice';
import PageHeader from 'components/common/PageHeader/PageHeader';

type MovieHeaderProps = {
    movie: Movie;
};

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

