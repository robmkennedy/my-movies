import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector, useReviewItemsSelector, useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { Button } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useAppDispatch } from 'hooks/stateHooks';
import { addedToHistory, deletedFromHistory, updatedInHistory } from 'state/slices/historySlice';
import { Fragment, useState } from 'react';
import { type } from 'os';
import ReviewEditor from 'components/review/ReviewEditor/ReviewEditor';
import ReviewDetails from 'components/review/ReviewDetails/ReviewDetails';
import ButtonGroup from 'components/common/ButtonGroup/ButtonGroup';
import { Movie, Review, ReviewResponse } from 'utils/types';
import ReviewFactory from 'model/ReviewFactory';
import { addedToReviews, deletedFromReviews } from 'state/slices/reviewSlice';
import './MovieReview.scss'

type MovieReviewProps = {
    movie: Movie;
};

const MovieReview = ({ movie }: MovieReviewProps) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const reviewItems = useReviewItemsSelector();
    const historyItems = useHistoryItemsSelector();

    const [isEditing, setIsEditing] = useState(false);

    let existingMovie = historyItems[movie.imdbID];
    let existingReview = reviewItems[movie.imdbID];

    existingMovie = existingMovie ? existingMovie : movie;

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = (response: ReviewResponse) => {
        const updatedReview = ReviewFactory.parseResponse(movie.imdbID, response);
        dispatch(addedToReviews(updatedReview));
        dispatch(addedToHistory(existingMovie));
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch(deletedFromReviews(movie.imdbID));
    };

    let content = null;
    if (isEditing) {
        content = <ReviewEditor review={existingReview} onCancel={handleCancel} onSave={handleSave} />;
    }
    else {
        content = <ReviewDetails review={existingReview} onDelete={handleDelete} onEdit={handleEdit} onAdd={handleEdit} />;
    }

    return (
        <section className='rk-movie-review'>
            <div className='rk-review-title'>{t('page.movie.review.title')}</div>
            <div className='rk-review-content'>
                {content}
            </div>
        </section>
    );
}

export default MovieReview;

