import SearchBar from 'components/controls/SearchBar/SearchBar';
import SearchResults from 'components/controls/SearchResults/SearchResults';
import { useLazyGetMovieByNameQuery } from 'state/slices/movieApiSlice';

const SearchPanel = () => {

    const [fetchTrigger, { data, error, isFetching }] = useLazyGetMovieByNameQuery();

    const handleSearch = (searchValue: string) => {
        fetchTrigger(searchValue);
    };

    return (
        <div className='rk-search-panel'>
            <SearchBar onSearch={handleSearch} />
            <SearchResults data={data} error={error} isFetching={isFetching} />
        </div>
    );
};

export default SearchPanel;