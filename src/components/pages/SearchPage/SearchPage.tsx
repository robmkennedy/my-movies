import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import PageSubtitle from 'components/common/PageSubtitle/PageSubtitle';
import SearchPanel from 'components/controls/SearchPanel/SearchPanel';
import { useTranslation } from 'react-i18next';

const SearchPage = () => {

    const { t } = useTranslation();

    return (
        <div id='searchPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.search.title')} />
                        <PageSubtitle text={t('page.search.title')} />
                        <SearchPanel />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SearchPage;
