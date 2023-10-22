import { useTranslation } from 'react-i18next';
import { Movie } from 'utils/types';
import './MovieDetails.scss';

type MovieDetailsProps = {
    movie: Movie;
};

const MovieDetails = ({ movie }: MovieDetailsProps) => {

    const { t } = useTranslation();

    const buildString = (items: string[] = []) => {
        return items.join(' / ');
    };

    return (
        <section className='rk-movie-details d-flex flex-column flex-md-row justify-content-center justify-content-md-start'>
                <div className='order-md-last'>
                    <div className='rk-movie-content'>
                        <div className='rk-movie-item'>
                            <div className='rk-movie-label'>{t('movie.details.title')}</div>
                            <div className='rk-movie-text'>{movie.title}</div>
                        </div>
                        <div className='rk-movie-item'>
                            <div className='rk-movie-label'>{t('movie.details.year')}</div>
                            <div className='rk-movie-text'>{movie.year}</div>
                        </div>
                        <div className='rk-movie-item'>
                            <div className='rk-movie-label'>{t('movie.details.plot')}</div>
                            <div className='rk-movie-text'>{movie.plot}</div>
                        </div>
                        <div className='rk-movie-item'>
                            <div className='rk-movie-label'>{t('movie.details.genre')}</div>
                            <div className='rk-movie-text'>{buildString(movie.genre)}</div>
                        </div>
                        <div className='rk-movie-item'>
                            <div className='rk-movie-label'>{t('movie.details.actors')}</div>
                            <div className='rk-movie-text'>{buildString(movie.actors)}</div>
                        </div>
                        {movie.imdbRating &&
                            <div className='rk-movie-item'>
                                <div className='rk-movie-label'>{t('common.imdb')}</div>
                                <div className='rk-movie-text'>{movie.imdbRating}</div>
                            </div>
                        }
                        {movie.metacriticRating &&
                            <div className='rk-movie-item'>
                                <div className='rk-movie-label'>{t('common.metacritic')}</div>
                                <div className='rk-movie-text'>{movie.metacriticRating}</div>
                            </div>
                        }
                        {movie.tomatoRating &&
                            <div className='rk-movie-item'>
                                <div className='rk-movie-label'>{t('common.tomatoes')}</div>
                                <div className='rk-movie-text'>{movie.tomatoRating}</div>
                            </div>
                        }
                    </div>
                </div>
                <div className='align-self-center align-self-md-start me-md-5'>
                    <img src={movie.poster} alt='Movie Poster' className='rk-movie-poster' />
                </div>
        </section>
    );
}

export default MovieDetails;
