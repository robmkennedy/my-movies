import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import PageHeader from 'components/common/PageHeader/PageHeader';
import SearchPanel from 'components/search/SearchPanel/SearchPanel';

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
