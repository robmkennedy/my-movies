import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';
import PageHeader from 'components/common/PageHeader/PageHeader';
import { useGetAboutContentQuery } from 'state/slices/aboutApiSlice';
import ErrorBox from 'components/common/ErrorBox/ErrorBox';
import LoadingBox from 'components/common/LoadingBox/LoadingBox';
import MovieDetails from 'components/movie/MovieDetails/MovieDetails';
import MovieHeader from 'components/movie/MovieHeader/MovieHeader';
import MovieReview from 'components/movie/MovieReview/MovieReview';
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import './AboutPage.scss';

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