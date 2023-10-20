import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/common/PageTitle/PageTitle';
import { useTranslation } from 'react-i18next';
import { useHistoryItemsSelector } from 'hooks/selectorHooks';
import { getMostOccurrences } from 'utils/helpers';
import RecommendationChart from 'components/common/RecommendationChart/RecommendationChart';

const RecommendationsPage = () => {
    const { t } = useTranslation();

    const historyObj = useHistoryItemsSelector();

    let actorArrays: string[][] = []; // An array of actor arrays
    let genreArrays: string[][] = []; // An array of genre arrays

    Object.values(historyObj).forEach((movie) => {
        actorArrays.push(movie.actors);
        genreArrays.push(movie.genre);
    });

    const actorOccurrencesMap = getMostOccurrences(actorArrays);
    const genreOccurrencesMap = getMostOccurrences(genreArrays);

    return (
        <div id='recommendationsPage'>
            <Container>
                <Row>
                    <Col>
                        <PageTitle title={t('page.recommendations.title')} />
                    </Col>
                </Row>
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
            </Container>
        </div>
    );
}

export default RecommendationsPage;