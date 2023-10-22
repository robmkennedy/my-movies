import { useState } from 'react';
import ReviewFactory from 'model/ReviewFactory';
import ReviewEditor from 'components/review/ReviewEditor/ReviewEditor';
import ReviewDetails from 'components/review/ReviewDetails/ReviewDetails';
import { useAppDispatch } from 'hooks/stateHooks';
import { useHistoryItemsSelector, useReviewItemsSelector } from 'hooks/selectorHooks';
import { addedToHistory } from 'state/slices/historySlice';
import { addedToReviews, deletedFromReviews } from 'state/slices/reviewSlice';
import { Movie, ReviewResponse } from 'utils/types';
import './MovieReview.scss';

type MovieReviewProps = {
    movie: Movie;
};

const MovieReview = ({ movie }: MovieReviewProps) => {
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
            <div className='rk-review-content'>
                {content}
            </div>
        </section>
    );
}

export default MovieReview;

