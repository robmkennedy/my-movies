import { useTranslation } from 'react-i18next';
import { useSearchValueSelector } from 'hooks/selectorHooks';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import Movie from 'model/Movie';
import { Button } from 'react-bootstrap';

type MovieDetailsProps = {
    movie: Movie;
};

const MovieDetails = ({movie}: MovieDetailsProps) => {

    const { t } = useTranslation();

    return (
        <section className='.rk-movie-details'>
            <div>{movie.title}</div>
        </section>
    );
}

export default MovieDetails;
