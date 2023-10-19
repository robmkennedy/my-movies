import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import PageSubtitle from 'components/common/PageSubtitle/PageSubtitle';
import HistoryList from 'components/common/HistoryList/HistoryList';
import { useTranslation } from 'react-i18next';

const HistoryPage = () => {

    const { t } = useTranslation();

    return (
        <div id='reviewsPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.history.title')} />
                        <PageSubtitle text={t('page.history.subtitle')} />
                        <HistoryList />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HistoryPage;