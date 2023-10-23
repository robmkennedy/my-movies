import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Movie } from 'utils/types';

type SearchButtonsProps = {
    movie: Movie
};

/**
 * A simple component used to wrap the buttons that are available when a movie is
 * found on the Search page. In this case, a Nav Link is used, which uses the unique
 * imdb ID to specify the route to open the Movie Page. The Movie Page can then access this ID
 * to detect review details.
 */
const SearchButtons = ({ movie }: SearchButtonsProps) => {
    const { t } = useTranslation();

    return (
        <section className='rk-search-buttons'>
            <NavLink to={`/movie/${movie.imdbID}`}><Button variant='outline-primary'>{t('page.search.buttons.review')}</Button></NavLink>
        </section>
    );
}

export default SearchButtons;
