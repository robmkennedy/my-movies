import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import HistoryPanel from 'components/history/HistoryPanel/HistoryPanel';
import { useTranslation } from 'react-i18next';
import PageHeader from 'components/common/PageHeader/PageHeader';

const HistoryPage = () => {

    const { t } = useTranslation();

    return (
        <div id='historyPage'>
            <Container>
                <Row>
                    <Col>
                        <PageHeader>
                            <PageTitle title={t('page.history.title')} />
                        </PageHeader>
                        <HistoryPanel />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HistoryPage;