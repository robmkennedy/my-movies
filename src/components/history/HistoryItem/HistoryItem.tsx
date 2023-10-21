import { useTranslation } from 'react-i18next';
import './HistoryItem.scss';
import { Movie } from 'utils/types';

type HistoryItemProps = {
    movie: Movie;
}

const HistoryItem = ({ movie }: HistoryItemProps) => {

    const { t } = useTranslation();

    return (
        <a href={`/movie/${movie.imdbID}`} className='rk-history-item'>
            <img src={movie.poster} alt='Movie Poster' className='rk-movie-poster' />
            <h5 className='rk-history-item-title'>{movie.title}</h5>
        </a>
    );
}

export default HistoryItem;
