import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import PageHeader from 'components/common/PageHeader/PageHeader';
import SearchPanel from 'components/search/SearchPanel/SearchPanel';

/**
 * The home page of the application. It presents a search bar to the user allowing
 * them to search for a particular movie based on title. IF a movie is found, the poster
 * and detail information for the movie is displayed beneath the search bar.
 */
const SearchPage = () => {
    const { t } = useTranslation();

    return (
        <article id='searchPage'>
            <Container>
                <Row>
                    <Col>
                        <PageHeader>
                            <PageTitle title={t('page.search.title')} />
                        </PageHeader>
                        <SearchPanel />
                    </Col>
                </Row>
            </Container>
        </article >
    );
};

export default SearchPage;
