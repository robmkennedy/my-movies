import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import PageHeader from 'components/common/PageHeader/PageHeader';
import HistoryPanel from 'components/history/HistoryPanel/HistoryPanel';

/**
 * This page displays a list of the movies the user has already watched.
 * They will be displayed using the poster thumbnails, and have the user star review
 * beneath each (if it exists).
 */
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