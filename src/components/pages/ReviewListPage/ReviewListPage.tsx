import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/pages/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

const ReviewListPage = () => {

    const { t } = useTranslation();

    return (
        <div id='reviewsPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.review.list.title')} />
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ReviewListPage;