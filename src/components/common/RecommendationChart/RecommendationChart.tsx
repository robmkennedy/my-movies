type RecommendationChartProps = {
    title: string,
    description: string,
    occurrencesMap: Map<string, number>
};

const RecommendationChart = ({title, description, occurrencesMap}: RecommendationChartProps) => {

    const countArray = [...occurrencesMap.entries()];
    countArray.sort((a, b) => b[1] - a[1]);

    let result = countArray.map((entry, index) => {
        debugger;
        return <div key={index}>{entry}</div>
    });

    return (
        <div className='.rk-recommendation-chart'>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <div>{result}</div>
        </div>
    );
}

export default RecommendationChart;