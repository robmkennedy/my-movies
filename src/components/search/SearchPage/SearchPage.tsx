import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import SearchPanel from 'components/search/SearchPanel/SearchPanel';
import { useTranslation } from 'react-i18next';

const SearchPage = () => {

    const { t } = useTranslation();

    return (
        <article id='searchPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.search.title')} />
                        <SearchPanel />
                    </Col>
                </Row>
            </Container>
        </article>
    );
};

export default SearchPage;
