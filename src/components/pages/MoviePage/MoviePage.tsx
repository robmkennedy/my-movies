import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';
import PageSubtitle from 'components/common/PageSubtitle/PageSubtitle';
import SearchBar from 'components/controls/SearchBar/SearchBar';
import { LayoutState } from 'utils/types';
import MessageBox from 'components/common/MessageBox/MessageBox';
import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from 'state/slices/movieApiSlice';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MovieDetails from 'components/common/MovieDetails/MovieDetails';
import { Fragment } from 'react';
import MovieHeader from 'components/common/MovieHeader/MovieHeader';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';
import MovieReview from 'components/common/MovieReview/MovieReview';

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
