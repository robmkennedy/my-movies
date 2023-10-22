import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MovieDetails from 'components/movie/MovieDetails/MovieDetails';
import MovieHeader from 'components/movie/MovieHeader/MovieHeader';
import MovieReview from 'components/movie/MovieReview/MovieReview';
import { useGetMovieByIdQuery } from 'state/slices/movieApiSlice';

const MoviePage = () => {
    const { t } = useTranslation();

    const { imdbID } = useParams();

    const { data, error, isLoading } = useGetMovieByIdQuery(imdbID);

    let content = <LoadingBox message={t('page.movie.loading')} />

    if (isLoading) {
        content = <LoadingBox message={t('page.movie.loading')} />
    }
    else if (error) {
        content = <ErrorBox message={t('page.movie.loading.error')} />
    }
    else if (data) {

        if (!data.found) {
            content = <ErrorBox message={t('page.movie.not.found')} />
        }
        else {
            content = (
                <Fragment>
                    <MovieHeader movie={data} />
                    <MovieReview movie={data} />
                    <MovieDetails movie={data} />
                </Fragment>
            );
        }
    }

    return (
        <div id='moviePage'>
            <Container>
                <Row>
                    <Col>
                        {content}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MoviePage;
