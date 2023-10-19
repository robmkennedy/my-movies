import { useTranslation } from 'react-i18next';
import './LoadingBox.scss';

type LoadingBoxProps = {
    message?: string
};

const LoadingBox = ({ message }: LoadingBoxProps) => {

    const { t } = useTranslation();
    const displayMessage = message || t('common.loading');

    return (
        <div className='rk-loading-box'>
            <div className='rk-spinner' />
            <h4>{displayMessage}</h4>
        </div>
    );
}

export default LoadingBox;