import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/pages/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

    const { t } = useTranslation();

    return (
        <div id='homePage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.home.title')} />
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;