
import { useAppDispatch } from 'hooks/stateHooks';
import { useState } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { movieSearched } from 'state/slices/movieSlice';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import { useLazyGetMovieByNameQuery } from 'state/slices/movieApiSlice';

const SearchPanel = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState('');

    const [fetchTrigger, { data, error, isLoading }] = useLazyGetMovieByNameQuery();


    const handleSearch = (searchValue: string) => {
        fetchTrigger(searchValue);
    };

    return (
        <section className='rk-search-panel'>
            <SearchBar onSearch={handleSearch} ></SearchBar>
            <SearchResults data={data} error={error} isLoading={isLoading} />
        </section>
    );
}

export default SearchPanel;