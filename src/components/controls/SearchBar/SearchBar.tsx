import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InputGroup, Button, Form } from 'react-bootstrap';

type SearchBarProps = {
    onSearch: Function
};

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
        <section id='searchBar' className='mt-lg-4 mb-4 mb-lg-5'>
            <InputGroup className="mb-3">
                <Form.Control placeholder="Movie title" aria-label="Movie title" onChange={handleChange} onKeyUp={handleKeyUp} value={inputValue} />
                <Button variant="outline-secondary" onClick={handleClick}>{t('common.search')}</Button>
            </InputGroup>
        </section>
    );
};

export default SearchBar;