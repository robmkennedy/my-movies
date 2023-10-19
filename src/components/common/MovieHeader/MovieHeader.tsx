import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import Movie from 'model/Movie';
import { Button } from 'react-bootstrap';
import PageTitle from '../PageTitle/PageTitle';
import { useAppDispatch } from 'hooks/stateHooks';
import { addedToHistory, deletedFromHistory, updatedInHistory } from 'state/slices/historySlice';
import { Fragment } from 'react';

type MovieHeaderProps = {
    movie: Movie;
};

const MovieHeader = ({ movie }: MovieHeaderProps) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const historyItems = useHistoryItemsSelector();

    const existingMovie = historyItems[movie.imdbID];


    const handleSaveClick = () => {
        dispatch(addedToHistory(movie));
    };

    const handleUpdateClick = () => {
        dispatch(updatedInHistory(movie));
    };

    const handleRemoveClick = () => {
        dispatch(deletedFromHistory(movie));
    };

    let buttonContent = null;
    if (existingMovie) {
        buttonContent = (<Fragment>
            <Button onClick={handleUpdateClick}>{t('page.movie.buttons.update')}</Button>
            <Button onClick={handleRemoveClick}>{t('page.movie.buttons.delete')}</Button>
        </Fragment>);
    }
    else {
        buttonContent = <Button onClick={handleSaveClick}>{t('page.movie.buttons.save')}</Button>
    }

    return (
        <section className='.rk-movie-header'>
            <PageTitle title={movie.title} />
            {buttonContent}
        </section>
    );
}

export default MovieHeader;

