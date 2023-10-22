import SearchBar from 'components/search/SearchBar/SearchBar';
import SearchResults from 'components/search/SearchResults/SearchResults';
import { useLazyGetMovieByNameQuery } from 'state/slices/movieApiSlice';

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