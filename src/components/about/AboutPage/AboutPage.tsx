import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';

import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import PageTitle from 'components/common/PageTitle/PageTitle';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import PageHeader from 'components/common/PageHeader/PageHeader';
import { useGetAboutContentQuery } from 'state/slices/aboutApiSlice';
import './AboutPage.scss';

/**
 * A page used to described details about how the application was built. 
 * It uses the react-markdown package to read the information from a markdown file.
 * This saves time having to hardcode the info into html tags.
 * The markdown is loaded async with RTK Query, therefore it will need to facilitate
 * Loader and Error tags. 
 */
const AboutPage = () => {
    const { t } = useTranslation();

    const { data, error, isLoading } = useGetAboutContentQuery('');

    let content = <LoadingBox message={t('page.about.loading')} />

    if (isLoading) {
        content = <LoadingBox message={t('page.about.loading')} />
    }
    else if (error) {
        content = <ErrorBox message={t('page.about.loading.error')} />
    }
    else if (data) {
        content = (
            <ReactMarkdown children={data} />
        );
    }

    return (
        <div id='aboutPage'>
            <Container>
                <Row>
                    <Col>
                        <PageHeader>
                            <PageTitle title={t('page.about.title')} />
                        </PageHeader>
                        <div className='rk-about-content'>
                            {content}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutPage;