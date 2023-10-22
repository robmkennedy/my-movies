import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './RecommendationChart.scss';

type RecommendationChartProps = {
    type: string,
    title: string,
    description: string,
    occurrencesMap: Map<string, number>
};

const RecommendationChart = ({ type, title, description, occurrencesMap }: RecommendationChartProps) => {
    const { t } = useTranslation();

    const countArray = [...occurrencesMap.entries()];
    countArray.sort((a, b) => b[1] - a[1]);

    let rows = countArray.slice(0, 5).map((entry, index) => {
        return <tr key={index}><td>{entry[0]}</td><td>{entry[1]}</td></tr>
    });

    return (
        <section className='rk-recommendation-chart'>
            <h4 className='rk-recommendation-chart-title'>{title} <span>{countArray[0][0]}</span></h4>
            <h6 className='rk-recommendation-chart-description'>{description}</h6>
            <Table>
                <thead>
                    <tr>
                        <th>{type}</th>
                        <th>{t('page.recommendations.watched')}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </section>
    );
}

export default RecommendationChart;