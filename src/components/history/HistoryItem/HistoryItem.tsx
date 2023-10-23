import RatingStars from 'components/common/RatingStars/RatingStars';
import { useReviewItemsSelector } from 'hooks/selectorHooks';
import { Movie } from 'utils/types';
import './HistoryItem.scss';

type HistoryItemProps = {
    movie: Movie;
}

/**
 * A component used to represent a single movie in the viewing history.
 * The entire component acts a link, and contains the movie poster, star rating, and title.
 * Hovering over a history item will increase the scale, acting as a hover indicator.
 * If a movie doesn't have a customer review - 'none' will be passed to the star rating.
 */
const HistoryItem = ({ movie }: HistoryItemProps) => {
    const reviewItems = useReviewItemsSelector();
    const existingReview = reviewItems[movie.imdbID];
    const rating = existingReview ? existingReview.rating : 'none';

    return (
        <a href={`/movie/${movie.imdbID}`} className='rk-history-item'>
            <img src={movie.poster} alt='Movie Poster' className='rk-movie-poster' />
            <RatingStars rating={rating} showText={false} />
            <h5 className='rk-history-item-title'>{movie.title}</h5>
        </a>
    );
}

export default HistoryItem;
