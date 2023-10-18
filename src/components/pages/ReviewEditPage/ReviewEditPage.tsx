import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/pages/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

const ReviewEditPage = () => {

    const { t } = useTranslation();

    return (
        <div id='reviewEditPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.review.edit.title')} />
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ReviewEditPage;