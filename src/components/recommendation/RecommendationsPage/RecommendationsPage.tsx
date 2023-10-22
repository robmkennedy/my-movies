import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { getMostOccurrences } from 'utils/helpers';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';
import RecommendationChart from 'components/recommendation/RecommendationChart/RecommendationChart';
import PageTitle from 'components/common/PageTitle/PageTitle';
import MessageBox from 'components/common/MessageBox/MessageBox';
import PageHeader from 'components/common/PageHeader/PageHeader';

const RecommendationsPage = () => {
    const { t } = useTranslation();

    const historyObj = useHistoryItemsSelector();

    let content = null;
    if (Object.keys(historyObj).length === 0) {
        content = <MessageBox message={t('page.recommendations.none')}></MessageBox>
    }
    else {

        let actorArrays: string[][] = []; // An array of actor arrays
        let genreArrays: string[][] = []; // An array of genre arrays

        Object.values(historyObj).forEach((movie) => {
            actorArrays.push(movie.actors);
            genreArrays.push(movie.genre);
        });

        const actorOccurrencesMap = getMostOccurrences(actorArrays);
        const genreOccurrencesMap = getMostOccurrences(genreArrays);

        content = (
            <Row className='gx-0'>
                <Col lg={5}>
                    <RecommendationChart type={t('page.recommendations.actor')}
                        title={t('page.recommendations.actor.title')}
                        description={t('page.recommendations.actor.description')}
                        occurrencesMap={actorOccurrencesMap} />
                </Col>
                <Col lg={2} />
                <Col lg={5}>
                    <RecommendationChart type={t('page.recommendations.genre')}
                        title={t('page.recommendations.genre.title')}
                        description={t('page.recommendations.genre.description')}
                        occurrencesMap={genreOccurrencesMap} />
                </Col>
            </Row>
        );
    }

    return (
        <div id='recommendationsPage'>
            <Container>
                <Row>
                    <Col>
                        <PageHeader>
                            <PageTitle title={t('page.recommendations.title')} />
                        </PageHeader>
                    </Col>
                </Row>
                {content}
            </Container>
        </div>
    );
}

export default RecommendationsPage;