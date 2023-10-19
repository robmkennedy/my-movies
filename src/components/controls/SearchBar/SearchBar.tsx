import { useState } from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { movieSearched } from 'state/slices/movieSlice';

type SearchBarProps = {
    onSearch: Function
};

const SearchBar = ({ onSearch }: SearchBarProps) => {

    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        onSearch(inputValue);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <section id='searchBar'>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                    value={inputValue}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>{t('common.search')}</Button>
            </InputGroup>
        </section>
    );
}

export default SearchBar;