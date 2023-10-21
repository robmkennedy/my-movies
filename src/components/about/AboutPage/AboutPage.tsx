import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <div id='aboutPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.about.title')} />
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutPage;