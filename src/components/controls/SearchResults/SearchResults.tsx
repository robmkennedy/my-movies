import { useTranslation } from 'react-i18next';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MessageBox from 'components/common/MessageBox/MessageBox';
import Movie from 'model/Movie';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import MovieDetails from 'components/common/MovieDetails/MovieDetails';
import { Fragment } from 'react';
import SearchButtons from '../SearchButtons/SearchButtons';

type SearchResultsProps = {
    data: Movie | undefined,
    error: FetchBaseQueryError | SerializedError | undefined,
    isLoading: boolean
};

const SearchResults = ({ data, error, isLoading }: SearchResultsProps) => {

    const { t } = useTranslation();

    let content = <MessageBox message={t('page.search.results.request')} />;

    if (isLoading) {
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
                <Fragment>
                    <SearchButtons movie={data} />
                    <MovieDetails movie={data} />
                </Fragment>
            );
        }
    }

    return (
        <section id='searchResults'>
            {content}
        </section>
    );
}

export default SearchResults;
