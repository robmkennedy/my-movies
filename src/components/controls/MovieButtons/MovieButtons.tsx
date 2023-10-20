import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import './SearchButtons.scss';
import { Movie } from 'utils/types';

type SearchButtonsProps = {
    movie: Movie
};

const SearchButtons = ({ movie }: SearchButtonsProps) => {

    const { t } = useTranslation();

    return (
        <section className='rk-search-buttons'>
            <h4>{movie.title}</h4>
            <Button href={`/movie/${movie.imdbID}`}>{t('page.search.buttons.history')}</Button>
        </section>
    );
}

export default SearchButtons;
