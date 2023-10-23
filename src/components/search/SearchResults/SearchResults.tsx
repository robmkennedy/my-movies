import { useTranslation } from 'react-i18next';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import MovieDetails from 'components/movie/MovieDetails/MovieDetails';
import SearchButtons from '../SearchButtons/SearchButtons';
import { Movie } from 'utils/types';

type SearchResultsProps = {
    data: Movie | undefined,
    error: FetchBaseQueryError | SerializedError | undefined,
    isFetching: boolean
};

/**
 * A component used to show the movie details on the Search page. This search results
 * is loaded via an API from the Search Panel, therefore it needs to accommodate
 * loading and error states. These are passed as properties and the messages are displayed
 * based to the user as appropriate. Note if the film does not exist, the query
 * is still successful (but returns an object with an error field). We map this to the
 * "found" property of our Movie object, and also use this to determine the message to
 * the end user.
 */
const SearchResults = ({ data, error, isFetching }: SearchResultsProps) => {
    const { t } = useTranslation();

    let content = <MessageBox message={t('page.search.results.request')} />;

    if (isFetching) {
        content = <LoadingBox message={t('page.search.results.searching')} />
    }
    else if (error) {
        content = <ErrorBox message={t('page.search.results.error')} />
    }
    else if (data) {

        if (!data.found) {
            content = <ErrorBox message={t('page.search.results.not.found')} />
        }
        else {
            content = (
                <div className='d-lg-flex'>
                    <div className='order-lg-last flex-shrink-0'>
                        <SearchButtons movie={data} />
                    </div>
                    <div className='flex-lg-grow-1'>
                        <MovieDetails movie={data} />
                    </div>
                </div>
            );
        }
    }

    return (
        <section className='search-results'>
            {content}
        </section>
    );
}

export default SearchResults;
