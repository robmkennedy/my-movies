import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';
import PageHeader from 'components/common/PageHeader/PageHeader';
import AboutMarkdown from 'components/about/AboutMarkdown/AboutMarkdown';

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
                        <AboutMarkdown/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutPage;