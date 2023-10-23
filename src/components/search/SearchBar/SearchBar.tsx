import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputGroup, Button, Form } from 'react-bootstrap';

type SearchBarProps = {
    onSearch: Function
};

/**
 * An input group component used to provide a search bar for the user. The onSearch property
 * is an event handler that is called with the string search value when the Search button
 * is clicked.
 */
const SearchBar = ({ onSearch }: SearchBarProps) => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        onSearch(inputValue);
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <section className='search-bar mt-lg-4 mb-4 mb-lg-5'>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Movie title" aria-label="Movie title" onChange={handleChange} onKeyUp={handleKeyUp} value={inputValue} />
                <Button variant="outline-secondary" onClick={handleClick}>{t('common.search')}</Button>
            </InputGroup>
        </section>
    );
};

export default SearchBar;