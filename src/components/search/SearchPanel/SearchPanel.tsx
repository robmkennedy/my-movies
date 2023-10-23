import SearchBar from 'components/search/SearchBar/SearchBar';
import SearchResults from 'components/search/SearchResults/SearchResults';
import { useLazyGetMovieByNameQuery } from 'state/slices/movieApiSlice';

/**
 * A component used to group the search bar and the search results. It uses RTK Query
 * lazy hook (automatically generated). This allows the query to be only called when
 * the search button is clicked - via the trigger function from the generated hook.
 */
const SearchPanel = () => {
    const [fetchTrigger, { data, error, isFetching }] = useLazyGetMovieByNameQuery();

    const handleSearch = (searchValue: string) => {
        fetchTrigger(searchValue);
    };

    return (
        <section className='rk-search-panel'>
            <SearchBar onSearch={handleSearch} />
            <SearchResults data={data} error={error} isFetching={isFetching} />
        </section>
    );
};

export default SearchPanel;