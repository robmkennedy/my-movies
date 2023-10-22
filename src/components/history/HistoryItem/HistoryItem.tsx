import RatingStars from 'components/common/RatingStars/RatingStars';
import { useReviewItemsSelector } from 'hooks/selectorHooks';
import { Movie } from 'utils/types';
import './HistoryItem.scss';

type HistoryItemProps = {
    movie: Movie;
}

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
