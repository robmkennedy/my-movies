import { useTranslation } from 'react-i18next';
import { useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { Button, Col, Row } from 'react-bootstrap';
import './MovieDetails.scss';
import { Movie } from 'utils/types';

type MovieDetailsProps = {
    movie: Movie;
};

const MovieDetails = ({ movie }: MovieDetailsProps) => {

    const { t } = useTranslation();

    const buildString = (items: string[] = []) => {
        return items.join(' / ');
    };

    return (
        <section className='rk-movie-details'>
            <Row>
                <Col md={6} lg={7} xl={8} className='order-md-last'>
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
                    </div>
                </Col>
                <Col>
                    <img src={movie.poster} alt='Movie Poster' className='rk-movie-poster' />
                </Col>
            </Row>
        </section>
    );
}

export default MovieDetails;
