import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { Movie } from 'utils/types';

type SearchButtonsProps = {
    movie: Movie
};

const SearchButtons = ({ movie }: SearchButtonsProps) => {

    const { t } = useTranslation();

    return (
        <section className='rk-search-buttons'>
            <Button href={`/movie/${movie.imdbID}`}>{t('page.search.buttons.review')}</Button>
        </section>
    );
}

export default SearchButtons;
