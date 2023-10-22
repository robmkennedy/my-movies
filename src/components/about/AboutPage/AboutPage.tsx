import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';
import PageHeader from 'components/common/PageHeader/PageHeader';

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <div id='aboutPage'>
            <Container>
                <Row>
                    <Col>
                        <PageHeader>
                            <PageTitle title={t('page.about.title')} />
                        </PageHeader>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutPage;