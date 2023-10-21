import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { Movie } from 'utils/types';
import { NavLink } from 'react-router-dom';

type SearchButtonsProps = {
    movie: Movie
};

const SearchButtons = ({ movie }: SearchButtonsProps) => {

    const { t } = useTranslation();

    return (
        <section className='rk-search-buttons'>
            <NavLink to={`/movie/${movie.imdbID}`}><Button>{t('page.search.buttons.review')}</Button></NavLink>
        </section>
    );
}

export default SearchButtons;
