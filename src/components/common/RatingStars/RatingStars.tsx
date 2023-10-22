import { useTranslation } from 'react-i18next';
import './RatingStars.scss';

type RatingStarsProps = {
    rating: string
    showText?: boolean
};

const starCounts: { [index: string]: number } = { 'none': 0, 'terrible': 1, 'poor': 2, 'average': 3, 'good': 4, 'excellent': 5 };

const RatingStars = ({ rating, showText = true }: RatingStarsProps) => {
    const { t } = useTranslation();

    let count = starCounts[rating];

    let starArray = [];
    for (let i = 0; i < 5; i++) {
        let type = (count === 0 ? 'none' : i < count ? 'bright' : 'dark');
        starArray.push(<i className={`rk-star-${type}`} key={i} />);
    }

    const label = t(`review.rating.${rating}`);

    return (
        <div className='rk-rating-stars'>
            {starArray}
            {showText && <div className='rk-rating-label'>{label}</div>}
        </div>
    );
}

export default RatingStars;
